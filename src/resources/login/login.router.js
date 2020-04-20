const router = require('express').Router();

router.route('/').post(async (req, res, next) => {
  try {
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
