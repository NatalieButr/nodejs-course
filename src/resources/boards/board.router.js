const router = require('express').Router();
const boardsService = require('./board.service');
const { ErrorHandler } = require('../../helpers/error');
const Board = require('./board.model');

// get all boards
router.route('/').get(async (req, res, next) => {
  try {
    const boards = await boardsService.getAll();
    if (!boards) {
      throw new ErrorHandler(404, 'boards not get');
    }
    res.json(boards.map(Board.toResponse));
  } catch (err) {
    return next(err);
  }
});

// get one board
router.route('/:id').get(async (req, res, next) => {
  try {
    const board = await boardsService.getBoard(req.params.id);
    if (!board) {
      throw new ErrorHandler(404, 'board not get');
    }
    res.json(Board.toResponse(board));
  } catch (err) {
    return next(err);
  }
});

// create new board
router.route('/').post(async (req, res, next) => {
  try {
    const newBoard = await boardsService.createBoard(req.body);
    res.json(Board.toResponse(newBoard));
  } catch (err) {
    return next(err);
  }
});

// update board
router.route('/:id').put(async (req, res, next) => {
  try {
    const { params, body } = req;
    const board = await boardsService.updateBoard({ ...params, ...body });
    if (!board) {
      throw new ErrorHandler(400, 'board not update');
    }
    res.status(200).json(Board.toResponse(board));
  } catch (err) {
    return next(err);
  }
});

// delete board
router.route('/:id').delete(async (req, res, next) => {
  try {
    const board = await boardsService.deleteBoard(req.params.id);
    if (board === null) {
      throw new ErrorHandler(404, 'board not delete');
    }
    res.status(204).json(Board.toResponse(board));
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
