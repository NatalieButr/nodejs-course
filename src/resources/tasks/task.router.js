const router = require('express').Router({ mergeParams: true });
const tasksService = require('./task.service');
const { ErrorHandler } = require('../../helpers/error');
const Task = require('./task.model');

// get all tasks
router.route('/').get(async (req, res) => {
  const tasks = await tasksService.getAll(req.params.boardId);
  res.status(200).json(tasks.map(Task.toResponse));
});

// get one task
router.route('/:id').get(async (req, res, next) => {
  try {
    const task = await tasksService.getTask(req.params.id);
    if (!task) {
      throw new ErrorHandler(404, 'Task not get');
    }
    res.status(200).json(Task.toResponse(task));
  } catch (err) {
    return next(err);
  }
});

// create new task
router.route('/').post(async (req, res, next) => {
  try {
    const newTask = await tasksService.createTask({
      ...req.body,
      ...req.params
    });
    res.json(Task.toResponse(newTask));
  } catch (err) {
    return next(err);
  }
});

// update task
router.route('/:id').put(async (req, res, next) => {
  try {
    const updatedTask = await tasksService.updateTask(req.body);
    res.status(200).json(Task.toResponse(updatedTask));
  } catch (err) {
    return next(err);
  }
  // else throw new ErrorHandler(400, 'Task not found');
});

// delete task
router.route('/:id').delete(async (req, res) => {
  const { id, boardId } = req.params;
  const task = await tasksService.deleteTask(id, boardId);
  res.status(204).json(Task.toResponse(task));
  //  else throw new ErrorHandler(400, 'Task not delete');
});

module.exports = router;
