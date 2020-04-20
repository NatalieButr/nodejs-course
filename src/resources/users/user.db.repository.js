const bcrypt = require('bcrypt');
const saltRounds = 5;

const User = require('./user.model');

const getAll = async () => User.find({});

const getUser = async id => User.findById(id);
const createUser = async data => {
  const hash = await bcrypt.hash(data.password, saltRounds);
  return User.create({ ...data, password: hash });
};

const updateUser = async newData => {
  const hash = await bcrypt.hash(newData.password, saltRounds);
  return User.updateOne({ _id: newData.id }, { ...newData, password: hash });
};

const deleteUser = async id => User.deleteOne({ _id: id });

module.exports = { getAll, getUser, createUser, updateUser, deleteUser };
