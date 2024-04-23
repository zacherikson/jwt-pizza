const Role = {
  Diner: 'diner',
  Franchisee: 'franchisee',
  Admin: 'admin',
};

const users = [
  { name: 'Rajah Singh', email: 'f@ps.com', roles: [Role.Franchisee] },
  { name: 'Zara Ahmed', email: 'a@ps.com', roles: [Role.Admin] },
  { name: 'Kai Chen', email: 'd@ps.com', roles: [Role.Diner] },
  { name: 'Lila Patel', email: 'lila@example.com', roles: [Role.Diner] },
  { name: 'Aiden Kim', email: 'aiden@example.com', roles: [Role.Diner] },
  { name: 'Sofia Nguyen', email: 'sofia@example.com', roles: [Role.Diner] },
  { name: 'Emilio Costa', email: 'emilio@example.com', roles: [Role.Diner] },
  { name: 'Amara Ali', email: 'amara@example.com', roles: [Role.Diner] },
  { name: 'Nikolai Petrov', email: 'nikolai@example.com', roles: [Role.Franchisee] },
  { name: 'Luna Santos', email: 'luna@example.com', roles: [Role.Franchisee] },
];

const pizzaMenu = [
  { title: 'Veggie', description: 'A garden of delight', image: 'pizza1.png', price: 24 },
  { title: 'Pepperoni', description: 'Spicy treat', image: 'pizza2.png', price: 33 },
  { title: 'Margarita', description: 'Essential classic', image: 'pizza3.png', price: 14 },
  { title: 'Crusty', description: 'A dry mouthed favorite', image: 'pizza4.png', price: 42 },
  { title: 'Flat', description: 'Something special', image: 'pizza5.png', price: 29 },
  { title: 'Chared Leopard', description: 'For those with a darker side', image: 'pizza6.png', price: 10 },
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
      { name: 'Crusty', price: 45, date: '2024-03-10T00:00:00Z' },
      { name: 'Flat', price: 45, date: '2024-03-10T00:00:00Z' },
      { name: 'Pepperoni', price: 45, date: '2024-03-10T00:00:00Z' },
      { name: 'Pepperoni', price: 45, date: '2024-03-10T00:00:00Z' },
    ],
  },
];

const franchises = [
  {
    name: 'SuperPie',
    admin: ['f@ps.com'],
    stores: [
      { city: 'Orem', totalRevenue: 3000000, address: '234 N 300 S' },
      { city: 'Provo', totalRevenue: 53000, address: '234 N 300 S' },
      { city: 'Payson', totalRevenue: 458767832, address: '234 N 300 S' },
    ],
  },
  {
    name: 'LotaPizza',
    admin: ['luna@example.com'],
    stores: [
      { city: 'Lehi', totalRevenue: 3000000, address: '234 N 300 S' },
      { city: 'Springville', totalRevenue: 53000, address: '234 N 300 S' },
      { city: 'American Fork', totalRevenue: 458767832, address: '234 N 300 S' },
    ],
  },
  { name: 'PizzaCorp', admin: ['nikolai@example.com'], stores: [{ city: 'Spanish Fork', totalRevenue: 3000000, address: '234 N 300 S' }] },
];

class ApiFacade {
  isAdmin(user) {
    return user?.roles.includes(Role.Admin);
  }

  isFranchisee(user) {
    return user?.roles.includes(Role.Franchisee);
  }

  async login(email, password) {
    return new Promise((resolve, reject) => {
      if (!!email && !!password) {
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

  async register(name, email, password) {
    return new Promise(async (resolve, reject) => {
      if (!!email && !!password) {
        let user = users.find((user) => user.email === email);
        if (user) {
          reject({ code: 409, msg: 'user already exists' });
        }
        user = { name: name, email: email, roles: [Role.Diner] };
        users.push(user);
        await this.login(email, password);
        resolve(user);
      } else {
        reject({ code: 400, msg: 'invalid' });
      }
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

  async getPizzaMenu() {
    return pizzaMenu;
  }

  async getPurchases(purchasingUser) {
    return new Promise(async (resolve) => {
      let result = [];

      if (purchasingUser) {
        const user = await this.getUser();
        if (user && (this.isAdmin(user) || user.email === purchasingUser.email)) {
          const purchases = purchaseHistory.find((purchase) => purchase.email === purchasingUser.email);
          if (purchases) {
            result = purchases.pizzas;
          }
        }
      }
      resolve(result);
    });
  }

  async purchase(order) {
    return new Promise(async (resolve, reject) => {
      const user = await this.getUser();
      if (user) {
        const purchases = [];
        order.forEach((pizza) => {
          purchases.push({ name: pizza.title, price: pizza.price, date: new Date().toISOString() });
        });

        let userPurchaseHistory = purchaseHistory.find((purchase) => purchase.email === user.email);
        if (!userPurchaseHistory) {
          userPurchaseHistory = { email: user.email, pizzas: [] };
          purchaseHistory.push(userPurchaseHistory);
        }
        userPurchaseHistory.pizzas = [...purchases, ...userPurchaseHistory.pizzas];
        resolve(purchases);
      } else {
        reject({ code: 401, msg: 'unauthorized' });
      }
    });
  }

  async getFranchise(franchiseUser) {
    let result = {};

    if (franchiseUser) {
      const user = await this.getUser();
      if (this.isRole.Franchisee(user) || this.isAdmin(user)) {
        const franchise = franchises.find((franchise) => franchise.admin.includes(franchiseUser.email));
        if (franchise) {
          result = franchise;
        }
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
    return new Promise(async (resolve, reject) => {
      const user = await this.getUser();
      if (this.isAdmin(user)) {
        resolve(franchises);
      } else {
        reject({ code: 401, msg: 'unauthorized' });
      }
    });
  }

  async closeStore(franchise, store) {
    return new Promise(async (resolve, reject) => {
      const user = await this.getUser();
      if (this.isRole.Franchisee(user) || this.isAdmin(user)) {
        const match = franchises.find((candidate) => candidate.name === franchise.name);
        if (match) {
          match.stores = match.stores.filter((s) => s.city !== store.city);
          resolve({ code: 200, msg: 'store closed' });
          return;
        }
      }
      reject({ code: 401, msg: 'unauthorized' });
    });
  }
}

const Api = new ApiFacade();
export { Api, Role };
