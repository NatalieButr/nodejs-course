const tasksService = require('../tasks/task.service');
const boardsRepo = require('./board.db.repository');

const getAll = async () => await boardsRepo.getAll();
const getBoard = async id => await boardsRepo.getBoard(id);
const createBoard = async data => await boardsRepo.createBoard(data);
const updateBoard = async newData => await boardsRepo.updateBoard(newData);
const deleteBoard = async id => {
  await tasksService.deleteTaskByBoardId(id);
  return boardsRepo.deleteBoard(id);
};

module.exports = { getAll, getBoard, createBoard, updateBoard, deleteBoard };
