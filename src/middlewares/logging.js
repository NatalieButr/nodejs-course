const { createLogger, transports } = require('winston');

const loggerWinston = createLogger({
  transports: [
    new transports.Console({
      level: 'info'
    }),
    new transports.Console({
      level: 'error'
    })
  ]
});

const logger = (req, res, next) => {
  loggerWinston.log(
    'info',
    `${res.statusCode} url: ${req.url} method: ${
      req.method
    } params: ${JSON.stringify(req.params)} body: ${req.body}`
  );
  next();
};

module.exports = logger;
