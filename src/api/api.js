const Role = {
  Diner: 'diner',
  Franchisee: 'franchisee',
  Admin: 'admin',
};

const users = [
  { id: '12345678-1234-4abc-9def-123456789abc', name: 'Rajah Singh', email: 'f@ntf.com', password: 'a', roles: [Role.Franchisee] },
  { id: '87654321-4321-4def-9abc-987654321def', name: 'Zara Ahmed', email: 'a@ntf.com', password: 'a', roles: [Role.Admin] },
  { id: 'abcdef12-34ab-4def-9abc-abcdef123456', name: 'Kai Chen', email: 'd@ntf.com', password: 'a', roles: [Role.Diner] },
  { id: 'fedcba21-43ba-4fed-9cba-fedcba987654', name: 'Lila Patel', email: 'lila@ntf.com', password: 'a', roles: [Role.Diner] },
  { id: 'aabbccdd-eeff-4a4a-9a9a-bbccddeeff00', name: 'Aiden Kim', email: 'aiden@ntf.com', password: 'a', roles: [Role.Diner] },
  { id: '11223344-5566-4b4b-9b9b-ccddeeff0011', name: 'Sofia Nguyen', email: 'sofia@ntf.com', password: 'a', roles: [Role.Diner] },
  { id: '99887766-5544-4c4c-9c9c-bbaa99887766', name: 'Emilio Costa', email: 'emilio@ntf.com', password: 'a', roles: [Role.Diner] },
  { id: '44556677-3322-4d4d-9d9d-ccbbaa445566', name: 'Amara Ali', email: 'amara@ntf.com', password: 'a', roles: [Role.Diner] },
  { id: '65432109-8765-4e4e-9e9e-0123456789ab', name: 'Nikolai Petrov', email: 'nikolai@ntf.com', password: 'a', roles: [Role.Franchisee] },
  { id: '01234567-8901-4f4f-9f9f-9876543210ab', name: 'Luna Santos', email: 'luna@ntf.com', password: 'a', roles: [Role.Franchisee] },
];

const pizzaMenu = [
  { title: 'Veggie', description: 'A garden of delight', image: 'pizza1.png', price: 24.34 },
  { title: 'Pepperoni', description: 'Spicy treat', image: 'pizza2.png', price: 33.99 },
  { title: 'Margarita', description: 'Essential classic', image: 'pizza3.png', price: 14.25 },
  { title: 'Crusty', description: 'A dry mouthed favorite', image: 'pizza4.png', price: 42.25 },
  { title: 'Flat', description: 'Something special', image: 'pizza5.png', price: 29.99 },
  { title: 'Chared Leopard', description: 'For those with a darker side', image: 'pizza6.png', price: 10.99 },
];

class ApiFacade {
  franchises = [
    {
      name: 'SuperPie',
      admin: ['f@ntf.com'],
      id: 'e7b6a8f2-4e1d-4d2d-9e8a-3e9c1a2b6d5f',
      stores: [
        { id: '12345678-1234-4abc-9def-123456789abc', name: 'online', location: 'Orem', totalRevenue: 3000000 },
        { id: '87654321-4321-4def-9abc-987654321def', name: 'online', location: 'Provo', totalRevenue: 53000 },
        { id: 'abcdef12-34ab-4def-9abc-abcdef123456', name: 'online', location: 'Payson', totalRevenue: 458767832 },
      ],
    },
    {
      name: 'LotaPizza',
      admin: ['luna@ntf.com', 'nikolai@ntf.com'],
      id: 'abb3423f2-4e1d-4d2d-9e8a-3e9c1a2b6d77',
      stores: [
        { id: 'aabbccdd-eeff-4a4a-9a9a-bbccddeeff00', name: 'online', location: 'Lehi', totalRevenue: 3000000 },
        { id: '11223344-5566-4b4b-9b9b-ccddeeff0011', name: 'online', location: 'Springville', totalRevenue: 53000 },
        { id: '99887766-5544-4c4c-9c9c-bbaa99887766', name: 'online', location: 'American Fork', totalRevenue: 458767832 },
      ],
    },
    { name: 'PizzaCorp', admin: ['nikolai@ntf.com'], stores: [{ id: '44556677-3322-4d4d-9d9d-ccbbaa445566', name: 'online', location: 'Spanish Fork', totalRevenue: 3000000 }] },
  ];

  purchaseHistory = [
    {
      email: 'a@ntf.com',
      orders: [
        {
          id: 'e7b6a8f2-4e1d-4d2d-9e8a-3e9c1a2b6d5f',
          date: '2024-03-10T00:00:00Z',
          pizzas: [
            { name: 'Veggie', price: 50 },
            { name: 'Margarita', price: 45 },
          ],
        },
      ],
    },
    {
      email: 'd@ntf.com',
      orders: [
        {
          id: 'e7b3423f2-4e1d-4d2d-9e8a-3e9c1a2b6d5f',
          date: '2023-03-10T00:00:00Z',
          pizzas: [
            { name: 'Pepperoni', price: 50 },
            { name: 'Crusty', price: 45 },
          ],
        },
      ],
    },
  ];

  isAdmin(user) {
    return user?.roles.includes(Role.Admin);
  }

  isFranchisee(user) {
    return user?.roles.includes(Role.Franchisee);
  }

  async getMenu() {
    return new Promise((resolve) => {
      resolve(pizzaMenu);
    });
  }

  async login(email, password) {
    return new Promise((resolve, reject) => {
      if (!!email && !!password) {
        const user = users.find((user) => user.email === email && user.password === password);
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
        user = { id: this.generateUUID(), name: name, email: email, password: password, roles: [Role.Diner] };
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

  async getPurchases(purchasingUser) {
    return new Promise(async (resolve) => {
      let result = [];

      if (purchasingUser) {
        const user = await this.getUser();
        if (user && (this.isAdmin(user) || user.email === purchasingUser.email)) {
          const purchases = this.purchaseHistory.find((purchase) => purchase.email === purchasingUser.email);
          if (purchases) {
            result = purchases.orders;
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
        order.id = this.generateUUID();
        order.date = new Date().toISOString();

        let userPurchaseHistory = this.purchaseHistory.find((purchase) => purchase.email === user.email);
        if (!userPurchaseHistory) {
          userPurchaseHistory = { email: user.email, orders: [] };
          this.purchaseHistory.push(userPurchaseHistory);
        }
        userPurchaseHistory.orders = [order, ...userPurchaseHistory.orders];
        resolve(order);
      } else {
        reject({ code: 401, msg: 'unauthorized' });
      }
    });
  }

  async getFranchise(franchiseUser) {
    return new Promise(async (resolve, reject) => {
      if (franchiseUser) {
        const user = await this.getUser();
        if (this.isFranchisee(user) || this.isAdmin(user)) {
          const franchise = this.franchises.find((franchise) => franchise.admin.includes(franchiseUser.email));
          if (franchise) {
            resolve(franchise);
            return;
          }
        }
      }
      reject({ code: 404, msg: 'not found' });
    });
  }

  async createFranchise(franchise) {
    return new Promise((resolve, reject) => {
      if (franchise?.name && franchise?.admin.length > 0) {
        const user = users.find((user) => user.email === franchise.admin[0]);
        if (user) {
          if (this.franchises.find((candidate) => candidate.name === franchise.name)) {
            reject({ code: 409, msg: 'franchise already exists' });
            return;
          }

          if (!user.roles.includes(Role.Franchisee)) {
            user.roles.push(Role.Franchisee);
          }
          franchise.id = this.generateUUID();
          this.franchises.push(franchise);
          resolve(franchise);
          return;
        }
      }
      reject({ code: 400, msg: 'invalid' });
    });
  }

  async getFranchises() {
    return new Promise(async (resolve, reject) => {
      const user = await this.getUser();
      if (this.isAdmin(user)) {
        resolve(this.franchises);
      } else {
        reject({ code: 401, msg: 'unauthorized' });
      }
    });
  }

  async closeFranchise(franchise) {
    return new Promise(async (resolve, reject) => {
      const user = await this.getUser();
      if (this.isAdmin(user)) {
        this.franchises = this.franchises.filter((f) => f.id !== franchise.id);
        resolve({ code: 200, msg: 'store closed' });
        return;
      }
      reject({ code: 401, msg: 'unauthorized' });
    });
  }

  async createStore(franchise, store) {
    return new Promise(async (resolve, reject) => {
      if (store?.name) {
        const user = await this.getUser();
        if (this.isFranchisee(user) || this.isAdmin(user)) {
          const dbFranchise = this.franchises.find((candidate) => candidate.name === franchise.name);
          if (dbFranchise) {
            if (dbFranchise.stores.find((candidate) => candidate.name === store.name)) {
              reject({ code: 409, msg: 'store already exists' });
              return;
            }
            store.totalRevenue = 0;
            store.id = this.generateUUID();
            dbFranchise.stores.push(store);
            resolve(dbFranchise);
            return;
          }
        }
      }
      reject({ code: 400, msg: 'invalid' });
    });
  }

  async closeStore(franchise, store) {
    return new Promise(async (resolve, reject) => {
      const user = await this.getUser();
      if (this.isFranchisee(user) || this.isAdmin(user)) {
        const dbFranchise = this.franchises.find((candidate) => candidate.name === franchise.name);
        if (dbFranchise) {
          dbFranchise.stores = dbFranchise.stores.filter((s) => s.id !== store.id);
          resolve({ code: 200, msg: 'store closed' });
          return;
        }
      }
      reject({ code: 401, msg: 'unauthorized' });
    });
  }

  generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = (Math.random() * 16) | 0,
        v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
}

const Api = new ApiFacade();
export { Api, Role };
