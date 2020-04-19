const tasksRepo = require('./task.db.repository');

const getAll = boardId => tasksRepo.getAll(boardId);
const getTask = id => tasksRepo.getTask(id);
const createTask = data => tasksRepo.createTask(data);
const updateTask = newData => tasksRepo.updateTask(newData);
const deleteTask = (id, boardId) => tasksRepo.deleteTask(id, boardId);
const deleteTaskByBoardId = boardId => tasksRepo.deleteTaskByBoardId(boardId);
const unassignTask = userId => tasksRepo.unassignTask(userId);

module.exports = {
  getAll,
  getTask,
  createTask,
  updateTask,
  deleteTask,
  deleteTaskByBoardId,
  unassignTask
};
