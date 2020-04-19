const logger = require('./logger');

class ErrorHandler extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

// eslint-disable-next-line no-unused-vars
const handleError = (err, req, res, next) => {
  const { statusCode, message } = err;
  res.status(statusCode === undefined ? 500 : statusCode).json({
    status: 'error',
    statusCode: statusCode === undefined ? 500 : statusCode,
    message: message === undefined ? 'Internal Server Error' : message
  });
  logger.error(
    `${err.statusCode || 500} - ${err.message} - ${req.originalUrl} - ${
      req.method
    }`
  );
};

module.exports = { ErrorHandler, handleError };
