const tasksRepo = require('./task.memory.repository');

const getAll = () => tasksRepo.getAll();
const getTask = (id) => tasksRepo.getTask(id);
const createTask = () => tasksRepo.createTask();
const updateTask = () => tasksRepo.updateTask();
const deleteTask = (id) => tasksRepo.deleteTask(id);


module.exports = { getAll, getTask, createTask, updateTask, deleteTask };
