const usersRepo = require('./user.memory.repository');

const taskServise = require('../tasks/task.service');
const { validateId } = require('../../helpers/helpers');

const getAll = () => usersRepo.getAll();

const getUser = async id => usersRepo.users.find(user => user.id === id);

const createUser = async user => usersRepo.users.push(user);

const updateUser = async newData => {
  const validateUser = validateId(usersRepo.users, newData.id);
  if (validateUser !== null) {
    usersRepo.users = usersRepo.users.map(item => {
      if (item.id === newData.id) {
        return (item = { ...newData });
      }
      return item;
    });
  }
  return validateUser;
};

const deleteUser = async id => {
  const validateUser = await validateId(usersRepo.users, id);
  if (validateUser !== null) {
    taskServise.unassignTask(id);
    usersRepo.users.forEach(user => {
      if (user.id === id) {
        const index = usersRepo.users.indexOf(user);
        usersRepo.users.splice(index, 1);
      }
    });
  }
  return validateUser;
};

module.exports = { getAll, getUser, createUser, updateUser, deleteUser };
