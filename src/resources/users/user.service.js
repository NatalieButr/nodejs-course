const usersRepo = require('./user.memory.repository');
<<<<<<< HEAD
const taskServise = require('../tasks/task.service')
const { validateId } = require('../../helpers/helpers')


const getAll = () => usersRepo.getAll();

const getUser = async (id) => {
    return usersRepo.users.find(user => user.id === id)
};
const createUser = async (user) => {
    return usersRepo.users.push(user)
};
const updateUser = (newData) => {
    let validateUser = validateId(usersRepo.users, newData.id);
    if(validateUser !== null) {
        usersRepo.users = usersRepo.users.map(item => {
            if(item.id === newData.id) {
              return item = {...newData}
            }
            return item;
          })   
    } 
    return validateUser; 
};
const deleteUser = async(id) => {
    let validateUser = await validateId(usersRepo.users,id)
    if(validateUser !== null) {
        taskServise.updateTaskUserId(id)
        usersRepo.users = usersRepo.users.filter(user => user.id !== id);
    }
    return validateUser;
};


module.exports = { getAll, getUser, createUser, updateUser, deleteUser };
=======

const getAll = () => usersRepo.getAll();

module.exports = { getAll };
>>>>>>> 83c785a9ede04c8f3a3601c86040a3b3f156e0d9
