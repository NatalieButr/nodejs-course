const Board = require('./board.model');

const getAll = async () => Board.find({});

const getBoard = async id => Board.findOne({ _id: id });

const createBoard = data => Board.create(data);

const updateBoard = async newData =>
  Board.updateOne({ _id: newData.id }, newData);

const deleteBoard = async id => Board.findByIdAndDelete(id);

module.exports = {
  getAll,
  getBoard,
  createBoard,
  updateBoard,
  deleteBoard
};
