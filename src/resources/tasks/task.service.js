const tasksRepo = require('./task.memory.repository');

const getAll = (boardId) => tasksRepo.getAll(boardId);
const getTask = (id) => tasksRepo.getTask(id);
const createTask = (data) => tasksRepo.createTask(data);
const updateTask = (newData) => tasksRepo.updateTask(newData);
const deleteTask = (id) => tasksRepo.deleteTask(id);
const updateTaskUserId = async(id) => {
   console.log(id, tasksRepo.tasks)
    tasksRepo.tasks = tasksRepo.tasks.map(task => {
        if(task.userId === id) {
          console.log(task, 'rask')
          return task = {...task, userId: null}
        }
        return task
    })
   // console.log(id, tasksRepo.tasks)
    return tasksRepo.tasks
}

module.exports = { getAll, getTask, createTask, updateTask, deleteTask, updateTaskUserId };
