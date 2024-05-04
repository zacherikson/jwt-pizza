enum Role {
  Diner = 'diner',
  Franchisee = 'franchisee',
  Admin = 'admin',
}

type Menu = Pizza[];

type Pizza = {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
};

type OrderItem = {
  menuId: string;
  description: string;
  price: number;
};

type Order = {
  id: string;
  franchiseId: string;
  storeId: string;
  date: string;
  items: OrderItem[];
};

type PurchaseHistory = {
  id: string;
  dinerId: string;
  orders: Order[];
};

type UserRole = {
  role: Role;
  objectId?: string;
};

type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  roles: UserRole[];
};

type Store = {
  id: string;
  name: string;
  totalRevenue?: number;
};

type Franchise = {
  id: string;
  admins?: { id: string; name: string; email: string }[];
  name: string;
  stores: Store[];
};

interface PizzaService {
  isAdmin(user: User): boolean;
  isFranchisee(user: User): boolean;
  getMenu(): Promise<Menu>;
  login(email: string, password: string): Promise<User>;
  register(email: string, password: string, role: string): Promise<User>;
  logout(): Promise<void>;
  getUser(): Promise<User | null>;
  getPurchases(user: User): Promise<Order[]>;
  purchase(order: Order): Promise<Order>;
  getFranchise(user: User): Promise<Franchise | null>;
  createFranchise(franchise: Franchise): Promise<Franchise>;
  getFranchises(): Promise<Franchise[]>;
  closeFranchise(franchise: Franchise): Promise<void>;
  createStore(franchise: Franchise, store: Store): Promise<Store>;
  closeStore(franchise: Franchise, store: Store): Promise<null>;
}

export { Role, PizzaService, User, Menu, Pizza, PurchaseHistory, Order, Franchise, Store, OrderItem };
