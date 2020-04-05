const router = require('express').Router();
const boardsService = require('./board.service');

// get all boards
router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();
  res.json(boards);
});

// get one board
router.route('/:id').get(async (req, res) => {
  const board = await boardsService.getBoard(req.params.id);
  if (board !== null) {
    res.status(200).json(board);
  } else {
    res.status(404).json({ message: 'error' });
  }
});
// create new board
router.route('/').post(async (req, res) => {
  const board = await boardsService.createBoard(req.body);
  res.status(200).json(board);
});
// update board
router.route('/:id').put(async (req, res) => {
  const board = await boardsService.updateBoard(req.body);
  if (board !== undefined) {
    res.status(200).json(board);
  } else {
    res.status(404).json({ message: 'error' });
  }
});

// delete board
router.route('/:id').delete(async (req, res) => {
  const board = await boardsService.deleteBoard(req.params.id);
  if (board !== null) {
    res.status(200).json(board);
  } else {
    res.status(404).json({ message: 'error' });
  }
});

module.exports = router;
