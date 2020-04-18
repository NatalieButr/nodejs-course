const { PORT } = require('./common/config');
const app = require('./app');
const connectToMongo = require('./db/db.client');
const logger = require('./helpers/logger');

process
  .on('unhandledRejection', (reason, promise) => {
    logger.error('Unhandled Rejection at Promise', reason, promise);
  })
  .on('uncaughtException', err => {
    logger.error(`Uncaught Exception thrown: ${err.message}`, err);
  });

connectToMongo(() => {
  app.listen(PORT, () =>
    console.log(`App is running on http://localhost:${PORT}`)
  );
});
