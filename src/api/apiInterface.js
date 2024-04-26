const Role = {
  Diner: 'diner',
  Franchisee: 'franchisee',
  Admin: 'admin',
};

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

export { ApiInterface, Role };
