const bcrypt = require('bcrypt');
const saltRounds = 5;

const usersRepo = require('./user.db.repository');
const tasksService = require('../tasks/task.service');

const getAll = () => usersRepo.getAll();
const getUser = id => usersRepo.getUser(id);
const createUser = async user => {
  const hash = await bcrypt.hash(user.password, saltRounds);
  return usersRepo.createUser({ ...user, password: hash });
};
const updateUser = async newData => {
  const hash = await bcrypt.hash(newData.password, saltRounds);
  return usersRepo.updateUser({ ...newData, password: hash });
};
const deleteUser = id => {
  tasksService.unassignTask(id);
  return usersRepo.deleteUser(id);
};

module.exports = { getAll, getUser, createUser, updateUser, deleteUser };
