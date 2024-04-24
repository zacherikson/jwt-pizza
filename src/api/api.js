const Role = {
  Diner: 'diner',
  Franchisee: 'franchisee',
  Admin: 'admin',
};

const pizzaMenu = [
  { title: 'Veggie', description: 'A garden of delight', image: 'pizza1.png', price: 0.00038 },
  { title: 'Pepperoni', description: 'Spicy treat', image: 'pizza2.png', price: 0.00042 },
  { title: 'Margarita', description: 'Essential classic', image: 'pizza3.png', price: 0.00014 },
  { title: 'Crusty', description: 'A dry mouthed favorite', image: 'pizza4.png', price: 0.00024 },
  { title: 'Flat', description: 'Something special', image: 'pizza5.png', price: 0.00028 },
  { title: 'Chared Leopard', description: 'For those with a darker side', image: 'pizza6.png', price: 0.00099 },
];

class ApiFacade {
  users = [
    { id: '12345678-1234-4abc-9def-123456789abc', name: 'Rajah Singh', email: 'f@nft.com', password: 'a', roles: [Role.Franchisee] },
    { id: '87654321-4321-4def-9abc-987654321def', name: 'Zara Ahmed', email: 'a@nft.com', password: 'a', roles: [Role.Admin] },
    { id: 'abcdef12-34ab-4def-9abc-abcdef123456', name: 'Kai Chen', email: 'd@nft.com', password: 'a', roles: [Role.Diner] },
    { id: 'fedcba21-43ba-4fed-9cba-fedcba987654', name: 'Lila Patel', email: 'lila@nft.com', password: 'a', roles: [Role.Diner] },
    { id: 'aabbccdd-eeff-4a4a-9a9a-bbccddeeff00', name: 'Aiden Kim', email: 'aiden@nft.com', password: 'a', roles: [Role.Diner] },
    { id: '11223344-5566-4b4b-9b9b-ccddeeff0011', name: 'Sofia Nguyen', email: 'sofia@nft.com', password: 'a', roles: [Role.Diner] },
    { id: '99887766-5544-4c4c-9c9c-bbaa99887766', name: 'Emilio Costa', email: 'emilio@nft.com', password: 'a', roles: [Role.Diner] },
    { id: '44556677-3322-4d4d-9d9d-ccbbaa445566', name: 'Amara Ali', email: 'amara@nft.com', password: 'a', roles: [Role.Diner] },
    { id: '65432109-8765-4e4e-9e9e-0123456789ab', name: 'Nikolai Petrov', email: 'nikolai@nft.com', password: 'a', roles: [Role.Franchisee] },
    { id: '01234567-8901-4f4f-9f9f-9876543210ab', name: 'Luna Santos', email: 'luna@nft.com', password: 'a', roles: [Role.Franchisee] },
  ];

  franchises = [
    {
      name: 'SuperPie',
      admin: ['f@nft.com'],
      id: 'e7b6a8f2-4e1d-4d2d-9e8a-3e9c1a2b6d5f',
      stores: [
        { id: '12345678-1234-4abc-9def-123456789abc', name: 'online', location: 'Orem', totalRevenue: 3.0 },
        { id: '87654321-4321-4def-9abc-987654321def', name: 'online', location: 'Provo', totalRevenue: 5.3 },
        { id: 'abcdef12-34ab-4def-9abc-abcdef123456', name: 'online', location: 'Payson', totalRevenue: 23.2 },
      ],
    },
    {
      name: 'LotaPizza',
      admin: ['luna@nft.com', 'nikolai@nft.com'],
      id: 'abb3423f2-4e1d-4d2d-9e8a-3e9c1a2b6d77',
      stores: [
        { id: 'aabbccdd-eeff-4a4a-9a9a-bbccddeeff00', name: 'online', location: 'Lehi', totalRevenue: 0.25 },
        { id: '11223344-5566-4b4b-9b9b-ccddeeff0011', name: 'online', location: 'Springville', totalRevenue: 1.9 },
        { id: '99887766-5544-4c4c-9c9c-bbaa99887766', name: 'online', location: 'American Fork', totalRevenue: 4.802 },
      ],
    },
    { name: 'PizzaCorp', admin: ['nikolai@nft.com'], stores: [{ id: '44556677-3322-4d4d-9d9d-ccbbaa445566', name: 'online', location: 'Spanish Fork', totalRevenue: 3000000 }] },
  ];

  purchaseHistory = [
    {
      email: 'a@nft.com',
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
      email: 'd@nft.com',
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
        const user = this.users.find((user) => user.email === email && user.password === password);
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
        let user = this.users.find((user) => user.email === email);
        if (user) {
          reject({ code: 409, msg: 'user already exists' });
        }
        user = { id: this.generateUUID(), name: name, email: email, password: password, roles: [Role.Diner] };
        this.users.push(user);
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
    return new Promise(async (resolve) => {
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
      resolve(null);
    });
  }

  async createFranchise(franchise) {
    return new Promise((resolve, reject) => {
      if (franchise?.name && franchise?.admin.length > 0) {
        const user = this.users.find((user) => user.email === franchise.admin[0]);
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
