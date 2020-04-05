const router = require('express').Router({ mergeParams: true })
const tasksService = require('./task.service');
const Task = require('./task.model')

//get all tasks
router.route('/').get(async (req, res) => {
  const tasks = await tasksService.getAll(req.params.boardId);
  res.status(200).json(tasks);
});

//get one task
router.route('/:id').get(async (req, res) => {
 // console.log(req.params)
  const task = await tasksService.getTask(req.params.id);
  res.status(200).json(task);
});

//create new task
router.route('/').post(async (req, res) => {
 const task = await tasksService.createTask({...req.body, ...req.params});
 res.status(200).json(task);
});

// update task
router.route('/:id').put(async (req, res) => {
  console.log('update task')
  const tasks = await tasksService.updateTask(req.body);
  res.json(tasks);
});

// // delete task
// router.route('/:id').delete(async (req, res) => {
//   const tasks = await tasksService.deleteTask(req.params.id);
//   res.json(tasks);
// });

module.exports = router;
