import { PizzaService, Franchise, Store, User, Menu, Order } from './pizzaService';

class HttpPizzaService implements PizzaService {
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

  async logout(): Promise<void> {
    return new Promise((resolve) => {
      resolve();
    });
  }

  async getUser(): Promise<User | null> {
    return new Promise((resolve) => {
      resolve({} as User);
    });
  }

  async getPurchases(user: User): Promise<Order[]> {
    return new Promise((resolve) => {
      resolve([] as Order[]);
    });
  }

  async purchase(order: Order): Promise<Order> {
    return new Promise((resolve) => {
      resolve({} as Order);
    });
  }

  async getFranchise(user: User): Promise<Franchise | null> {
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

  async closeFranchise(franchise: Franchise): Promise<void> {
    return new Promise((resolve) => {
      resolve();
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

const httpPizzaService = new HttpPizzaService();
export default httpPizzaService;
