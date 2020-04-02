const router = require('express').Router();
const boardsService = require('./board.service');
const Board = require('./board.model')

//get all boards
router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();
  res.json(boards);
});

//get one user
router.route('/:id').get(async (req, res) => {
  const board = await boardsService.getBoard(req.params.id);
  res.json(board);
});

//create use user
router.route('/').post(async (req, res) => {
  const boards = await boardsService.createBoard();
  res.json(boards);
});

// update user
router.route('/').put(async (req, res) => {
  const boards = await boardsService.updateBoard();
  res.json(boards);
});

// delete user
router.route('/:id').delete(async (req, res) => {
  const boards = await boardsService.deleteBoard(req.params.id);
  res.json(boards);
});

module.exports = router;
