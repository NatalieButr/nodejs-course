const User = require('./user.model');

const getAll = async () => {
  return User.find({});
};

const getUser = async id => {
  const user = await User.findById(id);
  return user !== null ? user : undefined;
};
const createUser = async data => {
  const user = await User.create(data);
  return user;
};

const updateUser = async newData => {
  return User.updateOne({ _id: newData.id }, newData);
};

const deleteUser = async id => {
  return User.deleteOne({ _id: id });
};

module.exports = { getAll, getUser, createUser, updateUser, deleteUser };
