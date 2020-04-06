const { validateId } = require('../../helpers/helpers');

const boardsRepo = require('../boards/board.memory.repository');
const Task = require('./task.model');

let tasks = [
  new Task({
    title: 'Task 1',
    order: 1,
    description: 'Hello World',
    userId: '13',
    boardId: '24',
    columnId: '32'
  }),
  new Task({
    title: 'Task 21',
    order: 1,
    description: '2 World',
    userId: '13',
    boardId: '24',
    columnId: '32'
  })
];

const getAll = boardId => getTasksByBoardId(boardId);

const getTask = id => {
  const validateTask = validateId(tasks, id);
  return validateTask;
};

const getTasksByBoardId = boardId =>
  tasks.filter(task => task.boardId === boardId);

const createTask = data => {
  const validateBoardId = validateId(boardsRepo.boards, data.boardId);
  if (validateBoardId !== null) {
    const newTask = new Task(data);
    tasks.push(newTask);
    return newTask;
  }
  return validateBoardId;
};

const updateTask = newData => {
  const validateTask = validateId(tasks, newData.id);
  const validateBoard = validateId(boardsRepo.boards, newData.boardId);
  if (validateTask !== null && validateBoard !== null) {
    tasks = tasks.map(item => {
      if (item.id === newData.id) {
        return (item = { ...newData });
      }
      return item;
    });
  }
  return validateTask;
};

const deleteTask = (id, boardId) => {
  const validateTask = validateId(tasks, id);
  const validateBoard = validateId(boardsRepo.boards, boardId);
  if (validateTask !== null && validateBoard !== null) {
    tasks = tasks.filter(task => task.id !== id);
  }
  return validateTask;
};

const deleteTaskByBoardId = boardId => {
  tasks = tasks.filter(task => task.boardId !== boardId);
};

const updateByUserId = userId => {
  return tasks.map(task => {
    if (task.userId === userId) {
      task.userId = null;
      return task;
    }
    return task;
  });
};

const unassignTask = userId => updateByUserId(userId);

module.exports = {
  getAll,
  getTask,
  createTask,
  updateTask,
  deleteTask,
  unassignTask,
  deleteTaskByBoardId,
  tasks
};
