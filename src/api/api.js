const roles = ['admin', 'dinner', 'franchisee'];

const users = [
  { name: 'Rajah Singh', email: 'f@ps.com', role: ['franchisee'] },
  { name: 'Zara Ahmed', email: 'a@ps.com', role: ['admin'] },
  { name: 'Kai Chen', email: 'd@ps.com', role: ['dinner'] },
  { name: 'Lila Patel', email: 'lila@example.com', role: ['dinner'] },
  { name: 'Aiden Kim', email: 'aiden@example.com', role: ['dinner'] },
  { name: 'Sofia Nguyen', email: 'sofia@example.com', role: ['dinner'] },
  { name: 'Emilio Costa', email: 'emilio@example.com', role: ['dinner'] },
  { name: 'Amara Ali', email: 'amara@example.com', role: ['dinner'] },
  { name: 'Nikolai Petrov', email: 'nikolai@example.com', role: ['franchisee'] },
  { name: 'Luna Santos', email: 'luna@example.com', role: ['franchisee'] },
];

const pizzas = [
  { title: 'Veggie', description: 'A garden of delight', image: 'pizza1.png' },
  { title: 'Pepperoni', description: 'Spicy treat', image: 'pizza2.png' },
  { title: 'Margarita', description: 'Essential classic', image: 'pizza3.png' },
  { title: 'Crusty', description: 'A dry mouthed favorite', image: 'pizza4.png' },
  { title: 'Flat', description: 'Something special', image: 'pizza5.png' },
  { title: 'Chared Leopard', description: 'For those with a darker side', image: 'pizza6.png' },
];

const purchaseHistory = [
  {
    email: 'a@ps.com',
    pizzas: [
      { name: 'Pepperoni', price: 35, date: new Date('2024-03-10T00:00:00Z') },
      { name: 'Veggie', price: 50, date: '2024-03-10T00:00:00Z' },
      { name: 'Margarita', price: 45, date: '2024-03-10T00:00:00Z' },
    ],
  },
  {
    email: 'd@ps.com',
    pizzas: [
      { name: 'Pepperoni', price: 35, date: new Date('2024-03-10T00:00:00Z') },
      { name: 'Pepperoni', price: 50, date: '2024-03-10T00:00:00Z' },
      { name: 'Pepperoni', price: 45, date: '2024-03-10T00:00:00Z' },
      { name: 'Pepperoni', price: 45, date: '2024-03-10T00:00:00Z' },
      { name: 'Pepperoni', price: 45, date: '2024-03-10T00:00:00Z' },
      { name: 'Pepperoni', price: 45, date: '2024-03-10T00:00:00Z' },
    ],
  },
];

const franchiseStores = [
  { name: 'Orem', totalRevenue: 3000000, address: '234 N 300 S' },
  { name: 'Provo', totalRevenue: 53000, address: '234 N 300 S' },
  { name: 'Payson', totalRevenue: 458767832, address: '234 N 300 S' },
];

const franchises = [
  { name: 'SuperPie', totalRevenue: 3000000, franchisee: 'f@ps.com' },
  { name: 'LotaPizza', totalRevenue: 53000, franchisee: 'luna@example.com' },
  { name: 'PizzaCorp', totalRevenue: 458767832, franchisee: 'nikolai@example.com' },
];

class Api {
  isAdmin(user) {
    return user?.role === 'admin';
  }

  isFranchisee(user) {
    return user?.role === 'franchisee';
  }

  async login(email, password) {
    return new Promise((resolve, reject) => {
      if (!!password) {
        const user = users.find((user) => user.email === email);
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          resolve(user);
          return;
        }
      }
      reject({ code: 404, msg: 'not found' });
    });
  }

  async logout() {
    return new Promise((resolve) => {
      localStorage.removeItem('user');
      resolve();
    });
  }

  async getUser() {
    return new Promise((resolve) => {
      let user = localStorage.getItem('user');
      if (user) {
        user = JSON.parse(user);
      }
      return resolve(user);
    });
  }

  loggedIn() {
    return !!this.getUser();
  }

  async getPizzas() {
    return pizzas;
  }

  async getPurchases(purchasingUser) {
    return new Promise(async (resolve) => {
      let result = [];

      if (purchasingUser) {
        const user = await this.getUser();
        if (user && (this.isAdmin(user) || user.email === purchasingUser.email)) {
          result = purchaseHistory.find((purchase) => purchase.email === purchasingUser.email);
          if (result) {
            result = result.pizzas;
          } else {
            result = [];
          }
        }
      }
      resolve(result);
    });
  }

  async getFranchiseStores(franchiseUser) {
    let result = [];

    if (franchiseUser) {
      const user = await this.getUser();
      if (this.isFranchisee(user) || this.isAdmin(user)) {
        result = franchiseStores;
      }
    }
    return result;
  }

  async createFranchise(newFranchise) {
    return new Promise((resolve) => {
      newFranchise.totalRevenue = 0;
      franchises.push(newFranchise);
      resolve(franchises);
    });
  }

  async getFranchises() {
    let result = [];

    const user = await this.getUser();
    if (this.isAdmin(user)) {
      result = franchises;
    }
    return result;
  }
}

export default new Api();
