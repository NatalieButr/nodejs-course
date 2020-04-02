const Task = require('./task.model')

let tasks =  new Array(10).fill(1).map(i => new Task())

const getAll = async () => {
  return tasks;
};

const getTask = async(id) => {
  return tasks.find(task => task.id === id)
}

const createTask = async () => {
  let newTask = new Task()
  return tasks = [...tasks, newTask]
}

const updateTask = async () => {
  return tasks
}

const deleteTask = async (id) => {
  return tasks = tasks.filter(task => task.id !== id)
}

module.exports = { getAll, getTask, createTask, updateTask, deleteTask };
