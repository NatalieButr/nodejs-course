const router = require('express').Router();

const loginService = require('./login.service');

router.route('/').post(async (req, res, next) => {
  try {
    const token = await loginService.getToken(req.body);
    if (!token) {
      res
        .status(403)
        .send('Incorrect login or password')
        .end();
    } else res.status(200).json({ token });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
