const { PORT } = require('./common/config');
const app = require('./app');
const logger = require('./helpers/logger');

process
  .on('unhandledRejection', (reason, promise) => {
    logger.error('Unhandled Rejection at Promise', reason, promise);
  })
  .on('uncaughtException', err => {
    logger.error(`Uncaught Exception thrown: ${err.message}`, err);
  });

app.listen(PORT, () =>
  console.log(`App is running on http://localhost:${PORT}`)
);
