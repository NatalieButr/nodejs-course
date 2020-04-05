const Board = require('./board.model')

let boards =  new Array(10).fill(1).map(i => new Board({title: 'sjsj', columns: []}))

const getAll = async () => {
  return boards;
};

const getBoard = async(id) => {
  return boards.find(board => board.id === id)
}

const createBoard = async (data) => {
  console.log(data)
  let newBoard = new Board(data)
  boards = [...boards, newBoard]
  return newBoard;
}

const updateBoard = async (newData) => {
  return boards = boards.map(item => {
    if(item.id === newData.id) {
      return {...newData}
    } else return item
  })
  return updatedBoarder = boarders.find(item => item.id === newData.id)
}

const deleteBoard= async (id) => {
  let isBoard = boards.find(board => board.id === id);
  if(isBoard !== undefined) {
    boards = boards.filter(board => board.id !== id);
  }
  return isBoard;
}

module.exports = { getAll, getBoard, createBoard, updateBoard, deleteBoard };
