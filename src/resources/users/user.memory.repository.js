const User = require('./user.model')
let users =  new Array(10).fill(1).map(i => new User({name: 'user', login: 'hhdh'}))

const getAll = async () => {
  return users;
};


module.exports = { getAll,  users };
