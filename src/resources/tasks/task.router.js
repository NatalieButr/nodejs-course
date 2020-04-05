const router = require('express').Router({ mergeParams: true });
const tasksService = require('./task.service');

// get all tasks
router.route('/').get(async (req, res) => {
  const tasks = await tasksService.getAll(req.params.boardId);
  res.status(200).json(tasks);
});

// get one task
router.route('/:id').get(async (req, res) => {
  const task = await tasksService.getTask(req.params.id);
  res.status(200).json(task);
});

// create new task
router.route('/').post(async (req, res) => {
  const task = await tasksService.createTask({ ...req.body, ...req.params });
  res.status(200).json(task);
});

// update task
router.route('/:id').put(async (req, res) => {
  const task = await tasksService.updateTask(req.body);
  if (task !== null) {
    res.status(200).json(task);
  } else {
    res.status(400).json({ message: 'task is not found' });
  }
});

// delete task
router.route('/:id').delete(async (req, res) => {
  const task = await tasksService.deleteTask(req.params.id, req.params.boardId);
  if (task !== null) {
    res.status(200).json(task);
  } else {
    res.status(400).json({ message: 'task is not found' });
  }
});

module.exports = router;
