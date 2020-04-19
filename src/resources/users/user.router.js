const router = require('express').Router();

const User = require('./user.model');
const usersService = require('./user.service');
const { ErrorHandler } = require('../../helpers/error');

// get all users
router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  if (!users) {
    throw new ErrorHandler(404, 'Cannot get list of users');
  }
  res.json(users.map(User.toResponse));
});

// get one user
router.route('/:id').get(async (req, res) => {
  const user = await usersService.getUser(req.params.id);
  res.json(User.toResponse(user));
});

// create user
router.route('/').post(async (req, res, next) => {
  try {
    const { name, login, password } = req.body;
    if (name && login && password) {
      const newUser = await usersService.createUser(req.body);
      res.json(User.toResponse(newUser)).end();
    } else {
      throw new ErrorHandler(404, 'bad request');
    }
  } catch (err) {
    return next(err);
  }
});

// update user
router.route('/:id').put(async (req, res) => {
  const { params, body } = req;
  const user = await usersService.updateUser({ ...params, ...body });
  if (!user) {
    throw new ErrorHandler(400, 'user not update');
  }
  res.status(200).json(user);
});

// delete user
router.route('/:id').delete(async (req, res, next) => {
  try {
    const user = await usersService.deleteUser(req.params.id);
    if (user === null) {
      throw new ErrorHandler(400, 'user not delete');
    }
    res.status(204).end(user);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
