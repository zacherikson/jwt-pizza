import { ApiNewInterface, Franchise, Store, OrderItem, User, Menu, Purchase, Order } from './apiInterface';

class ServiceApi implements ApiNewInterface {
  isAdmin(user: User): boolean {
    return false;
  }

  isFranchisee(user: User): boolean {
    return false;
  }

  async getMenu(): Promise<Menu> {
    return new Promise((resolve) => {
      resolve({} as Menu);
    });
  }

  async login(email: string, password: string): Promise<User> {
    return new Promise((resolve) => {
      resolve({} as User);
    });
  }

  async register(name: string, email: string, password: string): Promise<User> {
    return new Promise((resolve) => {
      resolve({} as User);
    });
  }

  async logout(): Promise<null> {
    return new Promise((resolve) => {
      resolve(null);
    });
  }

  async getUser(): Promise<User> {
    return new Promise((resolve) => {
      resolve({} as User);
    });
  }

  async getPurchases(user: User): Promise<Purchase[]> {
    return new Promise((resolve) => {
      resolve([] as Purchase[]);
    });
  }

  async purchase(order: Order): Promise<Purchase[]> {
    return new Promise((resolve) => {
      resolve([] as Purchase[]);
    });
  }

  async getFranchise(user: User): Promise<Franchise> {
    return new Promise((resolve) => {
      resolve({} as Franchise);
    });
  }

  async createFranchise(franchise: Franchise): Promise<Franchise> {
    return new Promise((resolve) => {
      resolve({} as Franchise);
    });
  }

  async getFranchises(): Promise<Franchise[]> {
    return new Promise((resolve) => {
      resolve([] as Franchise[]);
    });
  }

  async closeFranchise(franchise: Franchise): Promise<string> {
    return new Promise((resolve) => {
      resolve('');
    });
  }

  async createStore(franchise: Franchise, store: Store): Promise<Store> {
    return new Promise((resolve) => {
      resolve({} as Store);
    });
  }

  async closeStore(franchise: Franchise, store: Store): Promise<null> {
    return new Promise((resolve) => {
      resolve(null);
    });
  }
}

const api = new ServiceApi();
export default api;
