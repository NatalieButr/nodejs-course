const router = require('express').Router();
const User = require('./user.model');
const boardsService = require('./board.service');

//get all users
router.route('/').get(async (req, res) => {
  const boards = await usersService.getAll();
  res.json(users);
});

//get one user
router.route('/:id').get(async (req, res) => {
  const board = await usersService.getBoard(req.params.id);
  res.json(board);
});

//create use user
router.route('/').post(async (req, res) => {
  const boards = await usersService.createBoard();
  res.json(boards);
});

// update user
router.route('/').put(async (req, res) => {
  const boards = await usersService.updateBoard();
  res.json(boards);
});

// delete user
router.route('/:id').delete(async (req, res) => {
  const boards = await usersService.deleteBoard(req.params.id);
  res.json(boards);
});

module.exports = router;
