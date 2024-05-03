import { PizzaService, Franchise, Store, User, Menu, Order, Role } from './pizzaService';

class HttpPizzaService implements PizzaService {
  isAdmin(user: User | null): boolean {
    return user != null && !!user.roles.find((r) => r.role === Role.Admin);
  }

  isFranchisee(user: User | null): boolean {
    return user != null && !!user.roles.find((r) => r.role === Role.Franchisee);
  }

  async callEndpoint(path: string, method: string = 'GET', body?: any): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const options: any = {
          method: method,
          headers: {
            'Content-Type': 'application/json',
          },
        };

        if (body) {
          options.body = JSON.stringify(body);
        }

        const r = await fetch('http://localhost:3000' + path, options);
        const j = await r.json();
        if (r.ok) {
          resolve(j);
        } else {
          reject({ code: r.status, message: j.message });
        }
      } catch (e) {
        reject({ code: 500, message: e.message });
      }
    });
  }

  async getMenu(): Promise<Menu> {
    return this.callEndpoint('/api/pizza/menu');
  }

  async login(email: string, password: string): Promise<User> {
    const user = await this.callEndpoint('/api/auth', 'PUT', { email, password });
    localStorage.setItem('user', JSON.stringify(user));
    return Promise.resolve(user);
  }

  async register(name: string, email: string, password: string): Promise<User> {
    const user = this.callEndpoint('/api/auth', 'POST', { name, email, password });
    localStorage.setItem('user', JSON.stringify(user));
    return Promise.resolve(user);
  }

  async logout(): Promise<void> {
    return new Promise(async (resolve) => {
      localStorage.removeItem('user');
      resolve();
    });
  }

  async getUser(): Promise<User | null> {
    return new Promise((resolve) => {
      let user: User | null = JSON.parse(localStorage.getItem('user') || 'null');
      return resolve(user);
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
      resolve(null);
    });
  }

  async createFranchise(franchise: Franchise): Promise<Franchise> {
    return new Promise((resolve) => {
      resolve({} as Franchise);
    });
  }

  async getFranchises(): Promise<Franchise[]> {
    return this.callEndpoint('/api/franchise');
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
