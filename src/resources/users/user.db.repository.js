const User = require('./user.model');

const getAll = async () => User.find({});

const getUser = async id => User.findById(id);
const createUser = async data => User.create(data);

const updateUser = async newData =>
  User.updateOne({ _id: newData.id }, newData);

const deleteUser = async id => User.deleteOne({ _id: id });

module.exports = { getAll, getUser, createUser, updateUser, deleteUser };
