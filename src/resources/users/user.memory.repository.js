const User = require('./user.model')

let users =  new Array(10).fill(1).map(i => new User())

const getAll = async () => {
  return users;
};


const getUser = async(id) => {
  return users.filter(user => user.id === id)
}

const createUser = async () => {
  return users.push( new User)
}

module.exports = { getAll, getUser };
