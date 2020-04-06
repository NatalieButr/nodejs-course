const router = require('express').Router();
const boardsService = require('./board.service');

// get all boards
router.route('/').get((req, res) => {
  const boards = boardsService.getAll();
  res.json(boards);
});

// get one board
router.route('/:id').get((req, res) => {
  const board = boardsService.getBoard(req.params.id);
  if (board !== null) res.status(200).json(board);
  else res.status(404).json({ message: 'error' });
});
// create new board
router.route('/').post((req, res) => {
  const board = boardsService.createBoard(req.body);
  res.status(200).json(board);
});

// update board
router.route('/:id').put((req, res) => {
  const board = boardsService.updateBoard(req.body);
  if (board !== undefined) res.status(200).json(board);
  else res.status(404).json({ message: 'error' });
});

// delete board
router.route('/:id').delete((req, res) => {
  const board = boardsService.deleteBoard(req.params.id);

  if (board !== null) res.status(204).json(board);
  else res.status(404).json({ message: 'error' });
});

module.exports = router;
