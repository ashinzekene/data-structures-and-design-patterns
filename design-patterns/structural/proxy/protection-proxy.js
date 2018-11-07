function Database(name) {
  this.users = [];
  this.name = name;
}
Database.prototype.addUser = function (user) {
  this.users.push(user);
};

Database.prototype.removeUser = function (user) {
  this.users = this.users.filter(u => u !== user);
};

Database.prototype.getUser = function (user) {
  return this.users.find(u => u === user);
};

Database.prototype.getAllUsers = function () {
  return this.users;
};

Database.prototype.removeAllUsers = function () {
  this.users = [];
};

function DatabaseProxy(name) {
  this.db = new Database(name);
}
DatabaseProxy.prototype.restrict = function (authUser) {
  if (!authUser || authUser.role !== 'admin') {
    throw new Error('Only admins can do that');
  }
};

DatabaseProxy.prototype.addUser = function (user) {
  this.db.users.push(user);
};

DatabaseProxy.prototype.removeUser = function (user, authUser) {
  this.restrict(authUser);
  this.db.users = this.db.users.filter(u => u !== user);
};

DatabaseProxy.prototype.getUser = function (user) {
  return this.db.users.find(u => u === user);
};

DatabaseProxy.prototype.getAllUsers = function (authUser) {
  this.restrict(authUser);
  return this.db.users;
};

DatabaseProxy.prototype.removeAllUsers = function (authUser) {
  this.restrict(authUser);
  this.db.users = [];
};

function User(name, role = 'client') {
  this.name = name;
  this.role = role;
}

const myDataBase = new DatabaseProxy();
const client = new User('client', 'client');
const admin = new User('admin', 'admin');
myDataBase.addUser(new User('user-1'));
myDataBase.addUser(new User('user-2'));
myDataBase.addUser(new User('user-3'));
myDataBase.addUser(new User('user-4'));
myDataBase.addUser(new User('user-5'));
myDataBase.removeUser(new User('user-1'), admin);
myDataBase.removeAllUsers(new User('user-1'), admin);
myDataBase.removeUser(new User('user-1'), client);
