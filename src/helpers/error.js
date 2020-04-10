class ErrorHandler extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

const handleError = (err, res) => {
  const { statusCode, message } = err;
  res.status(statusCode === undefined ? 500 : statusCode).json({
    status: 'error',
    statusCode: statusCode === undefined ? 500 : statusCode,
    message: message === undefined ? 'Internal Server Error' : message
  });
};

module.exports = { ErrorHandler, handleError };
