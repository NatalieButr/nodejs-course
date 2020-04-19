const tasksService = require('../tasks/task.service');
const boardsRepo = require('./board.db.repository');

const getAll = () => boardsRepo.getAll();
const getBoard = id => boardsRepo.getBoard(id);
const createBoard = data => boardsRepo.createBoard(data);
const updateBoard = newData => boardsRepo.updateBoard(newData);
const deleteBoard = id => {
  tasksService.deleteTaskByBoardId(id);
  return boardsRepo.deleteBoard(id);
};

module.exports = { getAll, getBoard, createBoard, updateBoard, deleteBoard };
