const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();
const getUser = (id) => usersRepo.getUser(id);
const createUser = (user) => usersRepo.createUser(user);
const updateUser = (newData) => usersRepo.updateUser(newData);
const deleteUser = (id) => usersRepo.deleteUser(id);


module.exports = { getAll, getUser, createUser, updateUser, deleteUser };
