const roles = ['admin', 'dinner', 'franchise'];

class Api {
  isAdmin(user) {
    return user?.role === 'admin';
  }

  isFranchise(user) {
    return user?.role === 'franchise';
  }

  async login(email, password) {
    if (!password) return false;

    localStorage.setItem('email', email);
    const role = roles.find((role) => email.includes(role)) || 'dinner';
    localStorage.setItem('role', role);
    return { email, role };
  }

  async logout() {
    localStorage.removeItem('email');
    localStorage.removeItem('role');
  }

  async getUser() {
    const email = localStorage.getItem('email');
    const role = localStorage.getItem('role');

    if (email) {
      return { email, role };
    }
    return null;
  }

  loggedIn() {
    return !!this.getUser();
  }
}

export default new Api();
