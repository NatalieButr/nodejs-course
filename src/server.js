const { PORT } = require('./common/config');
const app = require('./app');
const logger = require('./helpers/logger');

process
  .on('unhandledRejection', (reason, p) => {
    console.log(reason, p);
    logger.error(reason, 'Unhandled Rejection at Promise', p);
  })
  .on('uncaughtException', err => {
    logger.error(`${err.statusCode || 500} - ${err.message}`);
    const exit = process.exit;
    exit(1);
  });

app.listen(PORT, () =>
  console.log(`App is running on http://localhost:${PORT}`)
);
