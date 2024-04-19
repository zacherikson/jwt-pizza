const roles = ['admin', 'manager', 'employee'];
function login(email, password) {
  if (!password) return false;

  localStorage.setItem('email', email);
  const role = roles.find((role) => email.includes(role)) || 'user';
  localStorage.setItem('role', role);
  return true;
}

export { login };
