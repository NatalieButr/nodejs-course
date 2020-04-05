<<<<<<< HEAD
const User = require('./user.model')
let users =  new Array(10).fill(1).map(i => new User({name: 'user', login: 'hhdh'}))

const getAll = async () => {
  return users;
};


module.exports = { getAll,  users };
=======
const getAll = async () => {
  // TODO: mock implementation. should be replaced during task development
  return [];
};

module.exports = { getAll };
>>>>>>> 83c785a9ede04c8f3a3601c86040a3b3f156e0d9
