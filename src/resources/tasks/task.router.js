const router = require('express').Router({ mergeParams: true });
const tasksService = require('./task.service');
const { ErrorHandler } = require('../../helpers/error');
const Task = require('./task.model');

// get all tasks
router.route('/').get(async (req, res, next) => {
  try {
    const tasks = await tasksService.getAll(req.params.boardId);
    if (!tasks) {
      throw new ErrorHandler(404, 'Tasks not get');
    }
    res.status(200).json(tasks.map(Task.toResponse));
  } catch (err) {
    return next(err);
  }
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
    if (!newTask) {
      throw new ErrorHandler(404, 'Task not create');
    }
    res.json(Task.toResponse(newTask));
  } catch (err) {
    return next(err);
  }
});

// update task
router.route('/:id').put(async (req, res, next) => {
  try {
    const updatedTask = await tasksService.updateTask(req.body);
    if (!updatedTask) {
      throw new ErrorHandler(404, 'Task not update');
    }
    res.status(200).json(Task.toResponse(updatedTask));
  } catch (err) {
    return next(err);
  }
});

// delete task
router.route('/:id').delete(async (req, res, next) => {
  try {
    const { id, boardId } = req.params;
    const task = await tasksService.deleteTask(id, boardId);
    if (!task) {
      throw new ErrorHandler(404, 'Task not delete');
    }
    res.status(204).json(Task.toResponse(task));
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
