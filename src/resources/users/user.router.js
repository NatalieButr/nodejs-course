const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

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
    res.status(400).json({ message: 'Not validate data for create user' });
  } else {
    const newUser = new User(req.body);
    await usersService.createUser(newUser);
    res.json(User.toResponse(newUser));
  }
});

// update user
router.route('/:id').put(async (req, res) => {
  const user = await usersService.updateUser(req.body);
  if (user !== null) {
    res.status(200).json(user);
  } else {
    res.status(400).json({ message: 'user is not found' });
  }
});

// delete user
router.route('/:id').delete(async (req, res) => {
  const user = await usersService.deleteUser(req.params.id);
  if (user !== null) {
    res.status(204).json(user);
  } else {
    res.status(400).json({ message: 'user is not found' });
  }
});

module.exports = router;
