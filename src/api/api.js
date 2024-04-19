const roles = ['admin', 'manager', 'franchise'];

function login(email, password) {
  if (!password) return false;

  localStorage.setItem('email', email);
  const role = roles.find((role) => email.includes(role)) || 'user';
  localStorage.setItem('role', role);
  return true;
}

function logout() {
  localStorage.removeItem('email');
  localStorage.removeItem('role');
}

function getUser() {
  const email = localStorage.getItem('email');
  const role = localStorage.getItem('role');

  if (email) {
    return { email, role };
  }
  return null;
}

export { login, logout, getUser };
