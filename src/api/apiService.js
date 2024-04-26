import { Role, ApiInterface } from './apiInterface';

class ServiceApi extends ApiInterface {
  constructor() {
    super();
  }

  isAdmin(user) {}

  isFranchisee(user) {}

  async getMenu() {}

  async login(email, password) {}

  async register(name, email, password) {}

  async logout() {}

  async getUser() {}

  async getPurchases(purchasingUser) {}

  async purchase(order) {}

  async getFranchise(franchiseUser) {}

  async createFranchise(franchise) {}

  async getFranchises() {}

  async closeFranchise(franchise) {}

  async createStore(franchise, store) {}

  async closeStore(franchise, store) {}
}

const api = new ServiceApi();
export default api;
