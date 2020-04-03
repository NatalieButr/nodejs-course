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

//create user
router.route('/').post(async (req, res) => {
  const user = await usersService.createUser(req.body);
  res.json(User.toResponse(user));
});

// update user
router.route('/:id').put(async (req, res) => {
  const user = await usersService.updateUser(req.body);
  if(user !== undefined) {
    res.status(200).json(User.toResponse(user));
  } else {
    res.status(404).json({ message: `error` });
  }
});

// delete user
router.route('/:id').delete(async (req, res) => {
  const user = await usersService.deleteUser(req.params.id);
  if(user === undefined){
    res.status(200).json(user)
  } else {
    res.status(404).json({ message: `error` });
  }
});

module.exports = router;
