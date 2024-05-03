import { PizzaService, Franchise, Store, User, Menu, Order, Role } from './pizzaService';

class HttpPizzaService implements PizzaService {
  isAdmin(user: User | null): boolean {
    return user != null && !!user.roles.find((r) => r.role === Role.Admin);
  }

  isFranchisee(user: User | null): boolean {
    return user != null && !!user.roles.find((r) => r.role === Role.Franchisee);
  }

  async getMenu(): Promise<Menu> {
    return new Promise(async (resolve, reject) => {
      try {
        const r = await fetch('http://localhost:3000/api/pizza/menu');
        const j = await r.json();
        if (r.ok) {
          resolve(j as Menu);
        } else {
          reject({ code: r.status, message: j.message });
        }
      } catch (e) {
        reject({ code: 500, message: e.message });
      }
    });
  }

  async login(email: string, password: string): Promise<User> {
    return new Promise(async (resolve, reject) => {
      try {
        const r = await fetch('http://localhost:3000/api/auth', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
        const j = await r.json();
        if (r.ok) {
          localStorage.setItem('user', JSON.stringify(j));
          resolve(j as User);
        } else {
          reject({ code: r.status, message: j.message });
        }
      } catch (e) {
        reject({ code: 500, message: e.message });
      }
    });
  }

  async register(name: string, email: string, password: string): Promise<User> {
    return new Promise(async (resolve, reject) => {
      try {
        const r = await fetch('http://localhost:3000/api/auth', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, password }),
        });
        const j = await r.json();
        if (r.ok) {
          localStorage.setItem('user', JSON.stringify(j));
          resolve(j as User);
        } else {
          reject({ code: r.status, message: j.message });
        }
      } catch (e) {
        reject({ code: 500, message: e.message });
      }
    });
  }

  async logout(): Promise<void> {
    return new Promise((resolve) => {
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
