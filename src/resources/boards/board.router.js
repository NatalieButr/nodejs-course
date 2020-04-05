const router = require('express').Router();
const boardsService = require('./board.service');
const Board = require('./board.model')

//get all boards
router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();
  res.json(boards);
});

//get one board
router.route('/:id').get(async (req, res) => {
  const board = await boardsService.getBoard(req.params.id);
  
  if(board === undefined) {
    res.status(404).json({ message: `error` });
  } else {
    res.status(200).json(board);
  }
});

//create new board
router.route('/').post(async (req, res) => {
  console.log('create one board', req.body, req.params)
    const board = await boardsService.createBoard(req.body);
    res.json(board);

});

// update board
router.route('/:id').put(async (req, res) => {
  console.log('[put] boards')
  const board = await boardsService.updateBoard(req.body);
  if(board !== undefined) {
    res.status(200).json(board);
  } else {
    res.status(404).json({ message: `error` });
  }
});

// delete board
router.route('/:id').delete(async (req, res) => {
  const board = await boardsService.deleteBoard(req.params.id);
 // console.log(board, req.params)
  if(board !== undefined){
    res.status(200).json(board)
  } else {
    res.status(404).json({ message: `error` });
  }
});

module.exports = router;
