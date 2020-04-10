const express = require('express');
const swaggerUI = require('swagger-ui-express');
const path = require('path');
const YAML = require('yamljs');

const userRouter = require('./resources/users/user.router');
const boardRouter = require('./resources/boards/board.router');
const taskRouter = require('./resources/tasks/task.router');
const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));
const { handleError } = require('./helpers/error');
const { httpLogger } = require('./middlewares');

app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

// logging middleware
app.use(httpLogger);

// routes
app.use('/users', userRouter);
app.use('/boards', boardRouter);
app.use('/boards/:boardId/tasks', taskRouter);

// error
app.get('*', (req, res) => {
  const err = new Error('Page Not Found');
  err.statusCode = 404;
  handleError(err, res);
});

app.use((err, req, res) => {
  handleError(err, res);
});

process
  .on('unhandledRejection', (reason, p) => {
    console.error(reason, 'Unhandled Rejection at Promise', p);
  })
  .on('uncaughtException', err => {
    console.error(err, 'Uncaught Exception thrown');
    const exit = process.exit;
    exit(1);
  });

module.exports = app;
