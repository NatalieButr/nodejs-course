const usersRepo = require('./user.db.repository');
const tasksService = require('../tasks/task.service');

const getAll = async () => await usersRepo.getAll();
const getUser = async id => await usersRepo.getUser(id);
const createUser = async user => await usersRepo.createUser(user);
const updateUser = async newData => await usersRepo.updateUser(newData);
const deleteUser = async id => {
  await tasksService.unassignTask(id);
  await usersRepo.deleteUser(id);
};

module.exports = { getAll, getUser, createUser, updateUser, deleteUser };
