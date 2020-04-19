const usersRepo = require('./user.db.repository');
const tasksService = require('../tasks/task.service');

const getAll = () => usersRepo.getAll();
const getUser = id => usersRepo.getUser(id);
const createUser = user => usersRepo.createUser(user);
const updateUser = newData => usersRepo.updateUser(newData);
const deleteUser = async id => {
  await tasksService.unassignTask(id);
  await usersRepo.deleteUser(id);
};

module.exports = { getAll, getUser, createUser, updateUser, deleteUser };
