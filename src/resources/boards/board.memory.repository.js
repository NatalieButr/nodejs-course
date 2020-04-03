const Board = require('./board.model')

let boards =  new Array(10).fill(1).map(i => new Board({title: 'sjsj', columns: []}))

const getAll = async () => {
  return boards;
};

const getBoard = async(id) => {
  return boards.find(board => board.id === id)
}

const createBoard = async (data) => {
  let newBoard = new Board(data)
  return boards = [...boards, newBoard]
}

const updateBoard = async () => {
  return boards
}

const deleteBoard= async (id) => {
  return boards = boards.filter(board => board.id !== id)
}

module.exports = { getAll, getBoard, createBoard, updateBoard, deleteBoard };
