const router = require('express').Router({ mergeParams: true });
const tasksService = require('./task.service');
const { ErrorHandler } = require('../../helpers/error');

// get all tasks
router.route('/').get((req, res) => {
  const tasks = tasksService.getAll(req.params.boardId);
  res.status(200).json(tasks);
});

// get one task
router.route('/:id').get((req, res) => {
  const task = tasksService.getTask(req.params.id);
  if (task !== null) res.status(200).json(task);
  else throw new ErrorHandler(404, 'Task not found');
});

// create new task
router.route('/').post((req, res) => {
  const task = tasksService.createTask({ ...req.body, ...req.params });
  if (task !== null) res.status(200).json(task);
  else throw new ErrorHandler(404, 'Cant create task');
});

// update task
router.route('/:id').put((req, res) => {
  const task = tasksService.updateTask(req.body);
  if (task !== null) res.status(200).json(task);
  else throw new ErrorHandler(400, 'Task not found');
});

// delete task
router.route('/:id').delete((req, res) => {
  const { id, boardId } = req.params;
  const task = tasksService.deleteTask(id, boardId);
  if (task !== null) res.status(204).json(task);
  else throw new ErrorHandler(400, 'Task not delete');
});

module.exports = router;
