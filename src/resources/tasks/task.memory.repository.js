const { validateId } = require('../../helpers/helpers');

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

const getAll = async boardId => {
  return getTasksByBoardId(boardId);
};

const getTask = async id => {
  return tasks.find(task => task.id === id);
};

const getTasksByBoardId = async boardId => {
  return tasks.filter(task => task.boardId === boardId);
};

const createTask = async data => {
  const newTask = new Task(data);
  await tasks.push(newTask);
  return newTask;
};

const updateTask = async newData => {
  const validateTask = validateId(tasks, newData.id);
  if (validateTask !== null) {
    tasks = tasks.map(item => {
      if (item.id === newData.id) {
        return (item = { ...newData });
      }
      return item;
    });
  }
  return validateTask;
};

const deleteTask = async (id, boardId) => {
  const validateTask = validateId(tasks, id);
  const taskInBoard = await getTasksByBoardId(boardId);
  if (validateTask !== null && taskInBoard.length) {
    taskInBoard.forEach(task => {
      if (task.id === id) {
        const index = tasks.indexOf(task);
        tasks.splice(index, 1);
      }
    });
  }
  return validateTask;
};

const deleteTaskByBoardId = async boardId => {
  return tasks.forEach(task => {
    if (task.id === boardId) {
      const index = tasks.indexOf(task);
      tasks.splice(index, 1);
    }
  });
};

const updateByUserId = async userId => {
  return tasks.map(task => {
    if (task.userId === userId) {
      task.userId = null;
      return task;
    }
    return task;
  });
};

const unassignTask = userId => {
  return updateByUserId(userId);
};

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
