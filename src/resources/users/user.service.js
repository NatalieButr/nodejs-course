const usersRepo = require('./user.memory.repository');

const taskRepo = require('../tasks/task.memory.repository');

const getAll = () => usersRepo.getAll();
const getUser = id => usersRepo.getUser(id);
const createUser = user => usersRepo.createUser(user);

const updateUser = newData => usersRepo.updateUser(newData);

const deleteUser = id => {
  taskRepo.unassignTask(id);
  return usersRepo.deleteUser(id);
};

module.exports = { getAll, getUser, createUser, updateUser, deleteUser };
