const router = require('express').Router();

const User = require('./user.model');
const usersService = require('./user.service');
const { ErrorHandler } = require('../../helpers/error');

// get all users
router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
});

// get one user
router.route('/:id').get(async (req, res) => {
  const user = await usersService.getUser(req.params.id);
  res.json(User.toResponse(user));
});

// create user
router.route('/').post(async (req, res) => {
  if (!req.body.name || !req.body.login || !req.body.password) {
    throw new ErrorHandler(400, 'Not validate data for create user');
  } else {
    const newUser = new User(req.body);
    await usersService.createUser(newUser);
    res.json(User.toResponse(newUser));
  }
});

// update user
router.route('/:id').put(async (req, res) => {
  const user = await usersService.updateUser(req.body);

  if (user !== null) res.status(200).json(user);
  else throw new ErrorHandler(400, 'user not found');
});

// delete user
router.route('/:id').delete(async (req, res) => {
  const user = await usersService.deleteUser(req.params.id);
  if (user !== null) res.status(204).json(user);
  else throw new ErrorHandler(400, 'user not delete');
});

module.exports = router;
