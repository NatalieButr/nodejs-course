const tasksRepo = require('./task.memory.repository');

const getAll = boardId => tasksRepo.getAll(boardId);
const getTask = id => tasksRepo.getTask(id);
const createTask = data => tasksRepo.createTask(data);
const updateTask = newData => tasksRepo.updateTask(newData);
const deleteTask = (id, boardId) => tasksRepo.deleteTask(id, boardId);
const unassignTask = id => tasksRepo.unassignTask(id);

module.exports = {
  getAll,
  getTask,
  createTask,
  updateTask,
  deleteTask,
  unassignTask
};
