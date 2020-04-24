const User = require('../users/user.model');

const getToken = async data => {
  const { login, password } = data;
  const user = await User.findOne({ login, password });
  if (!user) return user;
  const token = await user.generateAuthToken();
  return token;
};

module.exports = { getToken };
