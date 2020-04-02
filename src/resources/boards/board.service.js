const boardsRepo = require('./board.memory.repository');

const getAll = () => boardsRepo.getAll();
const getBoard = (id) => boardsRepo.getBoard(id);
const createBoard = () => boardsRepo.createBoard();
const updateBoard = () => boardsRepo.updateBoard();
const deleteBoard = (id) => boardsRepo.deleteBoard(id);


module.exports = { getAll, getBoard, createBoard, updateBoard, deleteBoard };
