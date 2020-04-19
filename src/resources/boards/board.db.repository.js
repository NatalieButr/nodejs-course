const Board = require('./board.model');
const getAll = async () => Board.find({});

const getBoard = async id => {
  return Board.findOne({ _id: id });
};

const createBoard = data => {
  return Board.create(data);
};

const updateBoard = async newData => {
  return Board.updateOne({ _id: newData.id }, newData);
};

const deleteBoard = async id => {
  return Board.findByIdAndDelete(id);
};

module.exports = {
  getAll,
  getBoard,
  createBoard,
  updateBoard,
  deleteBoard
};
