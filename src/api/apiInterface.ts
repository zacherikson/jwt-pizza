enum Role {
  Diner = 'diner',
  Franchisee = 'franchisee',
  Admin = 'admin',
}

type Menu = [Pizza];

type Pizza = {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
};

type OrderItem = {
  id: string;
  description: string;
  price: number;
};

type Order = {
  id: string;
  date: string;
  items: OrderItem[];
};

type Purchase = {
  id: string;
  diner: string;
  orders: Order[];
};

type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  roles: string[];
};

type Store = {
  id: string;
  name: string;
  location: string;
  totalRevenue: number;
};

type Franchise = {
  id: string;
  admins: string[];
  name: string;
  stores: Store[];
};

interface ApiNewInterface {
  isAdmin(user: User): boolean;
  isFranchisee(user: User): boolean;
  getMenu(): Promise<Menu>;
  login(email: string, password: string): Promise<User>;
  register(email: string, password: string, role: string): Promise<User>;
  logout(): Promise<null>;
  getUser(): Promise<User>;
  getPurchases(user: User): Promise<Purchase[]>;
  purchase(order: Order): Promise<Purchase[]>;
  getFranchise(user: User): Promise<Franchise>;
  createFranchise(franchise: Franchise): Promise<Franchise>;
  getFranchises(): Promise<Franchise[]>;
  closeFranchise(franchise: Franchise): Promise<string>;
  createStore(franchise: Franchise, store: Store): Promise<Store>;
  closeStore(franchise: Franchise, store: Store): Promise<null>;
}

function ApiInterface() {
  if (this.constructor === ApiInterface) throw new Error('Cannot instantiate interface directly');

  if (this.isAdmin === undefined) throw new Error('not implemented');
  if (this.isFranchisee === undefined) throw new Error('not implemented');
  if (this.getMenu === undefined) throw new Error('not implemented');
  if (this.login === undefined) throw new Error('not implemented');
  if (this.register === undefined) throw new Error('not implemented');
  if (this.logout === undefined) throw new Error('not implemented');
  if (this.getUser === undefined) throw new Error('not implemented');
  if (this.getPurchases === undefined) throw new Error('not implemented');
  if (this.purchase === undefined) throw new Error('not implemented');
  if (this.getFranchise === undefined) throw new Error('not implemented');
  if (this.createFranchise === undefined) throw new Error('not implemented');
  if (this.getFranchises === undefined) throw new Error('not implemented');
  if (this.closeFranchise === undefined) throw new Error('not implemented');
  if (this.createStore === undefined) throw new Error('not implemented');
  if (this.closeStore === undefined) throw new Error('not implemented');
}

export { ApiInterface, Role, ApiNewInterface, User, Menu, Pizza, Purchase, Order, Franchise, Store, OrderItem };
