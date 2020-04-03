const User = require('./user.model')

let users =  new Array(10).fill(1).map(i => new User({name: 'user', login: 'hhdh'}))

const getAll = async () => {
  return users;
};

const getUser = async(id) => {
  return users.find(user => user.id === id)
}

const createUser = async (user) => {
  let newUser  = new User(user)
  users = [...users, newUser]
  return newUser;
}

const updateUser = (newData) => {
  users = users.map(item => {
    if(item.id === newData.id) {
      return item = {...newData}
    }
    return item;
  })
  return updatedUser = users.find(item => item.id === newData.id)
}

const deleteUser = async (id) => {
  users = users.filter(user => user.id !== id);
  return users.find(user => user.id === id)
}

module.exports = { getAll, getUser, createUser, updateUser, deleteUser, users };
