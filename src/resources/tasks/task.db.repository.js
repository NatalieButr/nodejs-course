const boardsRepo = require('../boards/board.db.repository');
const Task = require('./task.model');

const getAll = async boardId => {
  const isValidateBoard = await boardsRepo.getBoard(boardId);
  if (isValidateBoard !== null) {
    const task = await Task.find({ boardId });
    return task === null ? undefined : task;
  }
  return null;
};

const getTask = async id => {
  return Task.findOne({ _id: id });
};

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

const deleteTaskByBoardId = async boardId => {
  await Task.deleteMany({ boardId });
};

const updateByUserId = async userId => {
  await Task.updateMany({ userId }, { userId: null });
};

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
