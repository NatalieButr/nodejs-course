const { validateId } = require('../../helpers/helpers');
const Board = require('./board.model');

const boards = [
  new Board({ title: 'First Board', columns: [] }),
  new Board({ title: 'Second Board', columns: [] })
];

const getAll = () => boards;

const getBoard = id => {
  const validateBoard = validateId(boards, id);
  return validateBoard;
};

const createBoard = data => {
  const newBoard = new Board(data);
  boards.push(newBoard);
  return newBoard;
};

const updateBoard = newData => {
  const validateBoard = validateId(boards, newData.id);
  if (validateBoard !== null) {
    boards.map(board => {
      if (board.id === newData.id) {
        const index = boards.indexOf(board);
        boards[index] = newData;
      }
      return board;
    });
  }
  return validateBoard;
};

const deleteBoard = id => {
  const validateBoard = validateId(boards, id);
  if (validateBoard !== null) {
    boards.map(board => {
      if (board.id === id) {
        const index = boards.indexOf(board);
        boards.splice(index, 1);
      }
    });
  }
  return validateBoard;
};

module.exports = {
  getAll,
  getBoard,
  createBoard,
  updateBoard,
  deleteBoard,
  boards
};
