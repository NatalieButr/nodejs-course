const morgan = require('morgan');
const logger = require('../helpers/logger');

logger.stream = {
  write(message, encoding) {
    logger.info(message);
  }
};
morgan.token('body', req => {
  return req.body;
});
morgan.token('query', req => {
  return req.query;
});

module.exports = morgan(
  ':method :status :url :query Body :body size :res[content-length] - :response-time ms',
  { stream: logger.stream }
);
