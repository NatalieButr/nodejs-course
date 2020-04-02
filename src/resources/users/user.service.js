const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();
const getUser = (id) => usersRepo.getUser(id);
const createUser = () => usersRepo.createUser();
const updateUser = () => usersRepo.updateUser();
const deleteUser = (id) => usersRepo.deleteUser(id);


module.exports = { getAll, getUser, createUser, updateUser, deleteUser };
