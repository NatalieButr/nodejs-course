const User = require('./user.model');
const users = [
  new User({ name: 'Harry', login: 'potter', password: 'tomredl' }),
  new User({ name: 'Hermiona', login: 'hermiona', password: 'sksk' })
];

const getAll = async () => {
  return users;
};

module.exports = { getAll, users };
