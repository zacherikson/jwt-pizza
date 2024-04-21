const roles = ['admin', 'dinner', 'franchise'];

const pizzas = [
  { title: 'Veggie', description: 'A garden of delight', image: 'pizza1.png' },
  { title: 'Pepperoni', description: 'Spicy treat', image: 'pizza2.png' },
  { title: 'Margarita', description: 'Essential classic', image: 'pizza3.png' },
  { title: 'Crusty', description: 'A dry mouthed favorite', image: 'pizza4.png' },
  { title: 'Flat', description: 'Something special', image: 'pizza5.png' },
  { title: 'Chared Leopard', description: 'For those with a darker side', image: 'pizza6.png' },
];

const purchases = [
  { name: 'Pepperoni', price: 35, date: new Date('2024-03-10T00:00:00Z') },
  { name: 'Veggie', price: 50, date: '2024-03-10T00:00:00Z' },
  { name: 'Margarita', price: 45, date: '2024-03-10T00:00:00Z' },
];

const franchiseStores = [
  { name: 'Orem', totalRevenue: 3000000, address: '234 N 300 S' },
  { name: 'Provo', totalRevenue: 53000, address: '234 N 300 S' },
  { name: 'Payson', totalRevenue: 458767832, address: '234 N 300 S' },
];

const franchises = [
  { name: 'SuperPie', totalRevenue: 3000000, franchisee: 'joe@franchise.com' },
  { name: 'LotaPizza', totalRevenue: 53000, franchisee: 'moe@franchise.com' },
  { name: 'PizzaCorp', totalRevenue: 458767832, franchisee: 'berry@franchise.com' },
];

class Api {
  isAdmin(user) {
    return user?.role === 'admin';
  }

  isFranchisee(user) {
    return user?.role === 'franchise';
  }

  async getPizzas() {
    return pizzas;
  }

  async getPurchases(purchasingUser) {
    let result = [];

    if (purchasingUser) {
      const user = await this.getUser();
      if (user && (this.isAdmin(user) || user.email === purchasingUser.email)) {
        result = purchases;
      }
    }
    return result;
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

  async getFranchises() {
    let result = [];

    const user = await this.getUser();
    if (this.isAdmin(user)) {
      result = franchises;
    }
    return result;
  }

  async login(email, password) {
    if (!password) return false;

    localStorage.setItem('email', email);
    const role = roles.find((role) => email.includes(role)) || 'dinner';
    localStorage.setItem('role', role);
    return { email, role };
  }

  async logout() {
    localStorage.removeItem('email');
    localStorage.removeItem('role');
  }

  async getUser() {
    const email = localStorage.getItem('email');
    const role = localStorage.getItem('role');

    if (email) {
      return { email, role };
    }
    return null;
  }

  loggedIn() {
    return !!this.getUser();
  }
}

export default new Api();
