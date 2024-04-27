import { Role, ApiInterface } from './apiInterface';

const pizzaMenu = [
  { id: '11111111-1111-1111-1111-111111111111', title: 'Veggie', description: 'A garden of delight', image: 'pizza1.png', price: 0.0038 },
  { id: '22222222-2222-2222-2222-222222222222', title: 'Pepperoni', description: 'Spicy treat', image: 'pizza2.png', price: 0.0042 },
  { id: '33333333-3333-3333-3333-333333333333', title: 'Margarita', description: 'Essential classic', image: 'pizza3.png', price: 0.0014 },
  { id: '44444444-4444-4444-4444-444444444444', title: 'Crusty', description: 'A dry mouthed favorite', image: 'pizza4.png', price: 0.0024 },
  { id: '55555555-5555-5555-5555-555555555555', title: 'Flat', description: 'Something special', image: 'pizza5.png', price: 0.0028 },
  { id: '66666666-6666-6666-6666-666666666666', title: 'Chared Leopard', description: 'For those with a darker side', image: 'pizza6.png', price: 0.0099 },
];

class ApiMock extends ApiInterface {
  constructor() {
    super();
  }

  users = [
    { id: '12345678-1234-4abc-9def-123456789abc', name: 'Rajah Singh', email: 'f@jwt.com', password: 'a', roles: [Role.Franchisee] },
    { id: '87654321-4321-4def-9abc-987654321def', name: 'Zara Ahmed', email: 'a@jwt.com', password: 'a', roles: [Role.Admin] },
    { id: 'abcdef12-34ab-4def-9abc-abcdef123456', name: 'Kai Chen', email: 'd@jwt.com', password: 'a', roles: [Role.Diner] },
    { id: 'fedcba21-43ba-4fed-9cba-fedcba987654', name: 'Lila Patel', email: 'lila@jwt.com', password: 'a', roles: [Role.Diner] },
    { id: 'aabbccdd-eeff-4a4a-9a9a-bbccddeeff00', name: 'Aiden Kim', email: 'aiden@jwt.com', password: 'a', roles: [Role.Diner] },
    { id: '11223344-5566-4b4b-9b9b-ccddeeff0011', name: 'Sofia Nguyen', email: 'sofia@jwt.com', password: 'a', roles: [Role.Diner] },
    { id: '99887766-5544-4c4c-9c9c-bbaa99887766', name: 'Emilio Costa', email: 'emilio@jwt.com', password: 'a', roles: [Role.Diner] },
    { id: '44556677-3322-4d4d-9d9d-ccbbaa445566', name: 'Amara Ali', email: 'amara@jwt.com', password: 'a', roles: [Role.Diner] },
    { id: '65432109-8765-4e4e-9e9e-0123456789ab', name: 'Nikolai Petrov', email: 'nikolai@jwt.com', password: 'a', roles: [Role.Franchisee] },
    { id: '01234567-8901-4f4f-9f9f-9876543210ab', name: 'Luna Santos', email: 'luna@jwt.com', password: 'a', roles: [Role.Franchisee] },
  ];

  franchises = [
    {
      name: 'SuperPie',
      admins: ['12345678-1234-4abc-9def-123456789abc'],
      id: 'e7b6a8f2-4e1d-4d2d-9e8a-3e9c1a2b6d5f',
      stores: [
        { id: '12345678-1234-4abc-9def-123456789abc', name: 'online', location: 'Orem', totalRevenue: 3.0 },
        { id: '87654321-4321-4def-9abc-987654321def', name: 'online', location: 'Provo', totalRevenue: 5.3 },
        { id: 'abcdef12-34ab-4def-9abc-abcdef123456', name: 'online', location: 'Payson', totalRevenue: 23.2 },
      ],
    },
    {
      name: 'LotaPizza',
      admins: ['01234567-8901-4f4f-9f9f-9876543210ab', '65432109-8765-4e4e-9e9e-0123456789ab'],
      id: 'abb3423f2-4e1d-4d2d-9e8a-3e9c1a2b6d77',
      stores: [
        { id: 'aabbccdd-eeff-4a4a-9a9a-bbccddeeff00', name: 'online', location: 'Lehi', totalRevenue: 0.25 },
        { id: '11223344-5566-4b4b-9b9b-ccddeeff0011', name: 'online', location: 'Springville', totalRevenue: 1.9 },
        { id: '99887766-5544-4c4c-9c9c-bbaa99887766', name: 'online', location: 'American Fork', totalRevenue: 4.802 },
      ],
    },
    { name: 'PizzaCorp', admins: ['nikolai@jwt.com'], stores: [{ id: '44556677-3322-4d4d-9d9d-ccbbaa445566', name: 'online', location: 'Spanish Fork', totalRevenue: 3000000 }] },
  ];

  purchaseHistory = [
    {
      id: 'ph1',
      diner: '87654321-4321-4def-9abc-987654321def',
      orders: [
        {
          id: 'e7b6a8f2-4e1d-4d2d-9e8a-3e9c1a2b6d5f',
          date: '2024-03-10T00:00:00Z',
          items: [
            { id: 'a11111111-1111-1111-1111-111111111111', description: 'Veggie', price: 0.05 },
            { id: 'a21111111-1111-1111-1111-111111111111', description: 'Margarita', price: 0.00345 },
          ],
        },
      ],
    },
    {
      id: 'ph2',
      diner: 'abcdef12-34ab-4def-9abc-abcdef123456',
      orders: [
        {
          id: 'e7b3423f2-4e1d-4d2d-9e8a-3e9c1a2b6d5f',
          date: '2023-03-10T00:00:00Z',
          items: [
            { id: 'a4111111-1111-1111-1111-111111111111', description: 'Pepperoni', price: 0.005 },
            { id: 'a3111111-1111-1111-1111-111111111111', description: 'Crusty', price: 0.0045 },
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
        if (user && (this.isAdmin(user) || user.id === purchasingUser.id)) {
          const purchases = this.purchaseHistory.find((purchase) => purchase.diner === purchasingUser.id);
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

        let userPurchaseHistory = this.purchaseHistory.find((purchase) => purchase.id === user.id);
        if (!userPurchaseHistory) {
          userPurchaseHistory = { id: this.generateUUID(), diner: user.id, orders: [] };
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
          const franchise = this.franchises.find((franchise) => franchise.admins.includes(franchiseUser.id));
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
      if (franchise?.name && franchise?.admins.length > 0) {
        const user = this.users.find((user) => user.id === franchise.admins[0]);
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
            resolve(store);
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

const Api = new ApiMock();
export default Api;
