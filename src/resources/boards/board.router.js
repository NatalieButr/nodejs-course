const router = require('express').Router();
const boardsService = require('./board.service');
const { ErrorHandler } = require('../../helpers/error');

// get all boards
router.route('/').get((req, res) => {
  const boards = boardsService.getAll();
  res.json(boards);
});

// get one board
router.route('/:id').get((req, res) => {
  const board = boardsService.getBoard(req.params.id);
  if (board !== null) res.status(200).json(board);
  else throw new ErrorHandler(404, `Can't get board with ${req.params.id}`);
});

// create new board
router.route('/').post((req, res) => {
  const board = boardsService.createBoard(req.body);
  res.status(200).json(board);
});

// update board
router.route('/:id').put((req, res) => {
  const board = boardsService.updateBoard(req.body);
  if (board !== null) res.status(200).json(board);
  else throw new ErrorHandler(404, "Can't update board");
});

// delete board
router.route('/:id').delete((req, res) => {
  const board = boardsService.deleteBoard(req.params.id);
  if (board !== null) res.status(204).json(board);
  else throw new ErrorHandler(404, "Can't delete board");
});

module.exports = router;
