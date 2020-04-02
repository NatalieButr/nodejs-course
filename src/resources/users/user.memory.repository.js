const User = require('./user.model')

let users =  new Array(10).fill(1).map(i => new User())

const getAll = async () => {
  return users;
};

const getUser = async(id) => {
  return users.find(user => user.id === id)
}

const createUser = async () => {
  let newUser  = new User()
  return users  = [...users, newUser]
}

const updateUser = async () => {
  return users
}

const deleteUser = async (id) => {
  return users = users.filter(user => user.id !== id)
}

module.exports = { getAll, getUser, createUser, updateUser, deleteUser };
