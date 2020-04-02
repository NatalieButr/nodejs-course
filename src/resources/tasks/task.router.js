const router = require('express').Router()
const tasksService = require('./task.service');
const Task = require('./task.model')

//get all tasks
router.route('/').get(async (req, res) => {
  const tasks = await tasksService.getAll();
  
  res.json(tasks);
});

//get one task
router.route('/:id').get(async (req, res) => {
  const task = await tasksService.getTask(req.params.id);
  res.json(task);
});

//create new task
router.route('/').post(async (req, res) => {
  const tasks = await tasksService.createTask();
  res.json(tasks);
});

// update task
router.route('/').put(async (req, res) => {
  const tasks = await tasksService.updateTask();
  res.json(tasks);
});

// delete task
router.route('/:id').delete(async (req, res) => {
  const tasks = await tasksService.deleteTask(req.params.id);
  res.json(tasks);
});

module.exports = router;
