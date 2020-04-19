const boardsRepo = require('../boards/board.db.repository');
const Task = require('./task.model');

const getAll = async boardId => {
  const isValidateBoard = await boardsRepo.getBoard(boardId);

  if (isValidateBoard !== null) {
    return Task.find({ boardId });
  }
  return null;
};

const getTask = async id => Task.findOne({ _id: id });

const createTask = async data => {
  const isValidateBoard = await boardsRepo.getBoard(data.boardId);
  if (isValidateBoard !== null) {
    return Task.create(data);
  }
  return null;
};

const updateTask = async newData => {
  const isValidateBoard = await boardsRepo.getBoard(newData.boardId);

  if (isValidateBoard !== null) {
    return Task.findByIdAndUpdate(newData.id, newData, {
      new: true,
      runValidators: true
    });
  }
  return null;
};

const deleteTask = async (id, boardId) => {
  const isValidateBoard = await boardsRepo.getBoard(boardId);

  if (isValidateBoard !== null) {
    return Task.findByIdAndDelete({ _id: id });
  }
  return null;
};

const deleteTaskByBoardId = async boardId => Task.deleteMany({ boardId });
const updateByUserId = async userId =>
  Task.updateMany({ userId }, { userId: null });
const unassignTask = userId => updateByUserId(userId);

module.exports = {
  getAll,
  getTask,
  createTask,
  updateTask,
  deleteTask,
  unassignTask,
  deleteTaskByBoardId
};
