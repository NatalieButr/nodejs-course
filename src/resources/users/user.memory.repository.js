const { validateId } = require('../../helpers/helpers');

const User = require('./user.model');
let users = [
  new User({ name: 'Harry', login: 'potter', password: 'tomredl' }),
  new User({ name: 'Hermiona', login: 'hermiona', password: 'sksk' })
];

const getAll = () => users;

const getUser = id => users.find(user => user.id === id);

const createUser = async user => users.push(user);

const updateUser = async newData => {
  const validateUser = validateId(users, newData.id);
  if (validateUser !== null) {
    users = users.map(item => {
      if (item.id === newData.id) {
        return (item = { ...newData });
      }
      return item;
    });
  }
  return validateUser;
};

const deleteUser = id => {
  const validateUser = validateId(users, id);
  if (validateUser !== null) {
    users = users.filter(user => user.id !== id);
  }
  return validateUser;
};

module.exports = { getAll, getUser, createUser, updateUser, deleteUser, users };
