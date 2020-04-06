const router = require('express').Router({ mergeParams: true });
const tasksService = require('./task.service');

// get all tasks
router.route('/').get((req, res) => {
  const tasks = tasksService.getAll(req.params.boardId);
  res.status(200).json(tasks);
});

// get one task
router.route('/:id').get((req, res) => {
  const task = tasksService.getTask(req.params.id);
  if (task !== null) res.status(200).json(task);
  else res.status(404).send('task not found');
});

// create new task
router.route('/').post((req, res) => {
  const task = tasksService.createTask({ ...req.body, ...req.params });
  if (task !== null) res.status(200).json(task);
  else res.status(404).send({ message: "can't create task. board not found" });
});

// update task
router.route('/:id').put((req, res) => {
  const task = tasksService.updateTask(req.body);
  if (task !== null) res.status(200).json(task);
  else res.status(400).json({ message: 'task is not found' });
});

// delete task
router.route('/:id').delete((req, res) => {
  const { id, boardId } = req.params;
  const task = tasksService.deleteTask(id, boardId);
  if (task !== null) res.status(204).json(task);
  else res.status(404).json({ message: 'task is not found' });
});

module.exports = router;
