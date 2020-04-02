const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

//get all users
router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
});

//get one user
router.route('/:id').get(async (req, res) => {
  const user = await usersService.getUser(req.params.id);
  res.json(User.toResponse(user));
});

//create use user
router.route('/').post(async (req, res) => {
  const users = await usersService.createUser();
  res.json(users.map(User.toResponse));
});

// update user
router.route('/').put(async (req, res) => {
  const users = await usersService.updateUser();
  res.json(users.map(User.toResponse));
});

// delete user
router.route('/:id').delete(async (req, res) => {
  const users = await usersService.deleteUser(req.params.id);
  res.json(users.map(User.toResponse));
});

module.exports = router;
