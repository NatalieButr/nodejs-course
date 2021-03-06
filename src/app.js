const express = require('express');
const swaggerUI = require('swagger-ui-express');
const path = require('path');
const YAML = require('yamljs');

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

const userRouter = require('./resources/users/user.router');
const boardRouter = require('./resources/boards/board.router');
const taskRouter = require('./resources/tasks/task.router');
const loginRouter = require('./resources/login/login.router');

const { handleError } = require('./helpers/error');
const { httpLogger, auth } = require('./middlewares');

app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

// logging middlewareap
app.use(httpLogger);

// routes
app.use('/users', auth, userRouter);
app.use('/boards', auth, boardRouter);
app.use('/boards/:boardId/tasks', auth, taskRouter);
app.use('/login', loginRouter);

// errors
// eslint-disable-next-line no-unused-vars
app.get('*', (req, res, next) => {
  const err = new Error('Page Not Found');
  err.statusCode = 404;
  handleError(err, req, res, next);
});

app.use(handleError);

module.exports = app;
