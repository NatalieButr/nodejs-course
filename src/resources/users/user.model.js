const uuid = require('uuid');

<<<<<<< HEAD

class User {
  constructor({
    id = uuid(),
    name,
    login,
    password
  } = {name, login, password}) {
=======
class User {
  constructor({
    id = uuid(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd'
  } = {}) {
>>>>>>> 83c785a9ede04c8f3a3601c86040a3b3f156e0d9
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  static toResponse(user) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

module.exports = User;
