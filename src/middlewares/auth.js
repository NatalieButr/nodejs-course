const jwt = require('jsonwebtoken');

const { JWT_SECRET_KEY } = require('../common/config.js');

const auth = (req, res, next) => {
  let token = req.headers['x-access-token'] || req.headers.authorization;
  if (!token) {
    return res
      .status(401)
      .send('token is invalid')
      .end();
  }
  if (token.startsWith('Bearer ')) {
    token = token.slice(7, token.length);
  }
  jwt.verify(token, JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      return res
        .status(401)
        .send('token is invalid')
        .end();
    }
    req.decoded = decoded;
    next();
  });
};

module.exports = auth;
