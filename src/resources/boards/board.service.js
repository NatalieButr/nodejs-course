const boardsRepo = require('./board.memory.repository');

const getAll = () => usersRepo.getAll();
const getBoard = (id) => usersRepo.getBoard(id);
const createBoard = () => usersRepo.createBoard();
const updateBoard = () => usersRepo.updateBoard();
const deleteBoard = (id) => usersRepo.deleteBoard(id);


module.exports = { getAll, getBoard, createBoard, updateBoard, deleteBoard };
