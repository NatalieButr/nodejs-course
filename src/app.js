const express = require('express');
const swaggerUI = require('swagger-ui-express');
const path = require('path');
const YAML = require('yamljs');
const userRouter = require('./resources/users/user.router');
<<<<<<< HEAD
const boardRouter = require('./resources/boards/board.router')
const taskRouter = require('./resources/tasks/task.router')
=======
>>>>>>> 83c785a9ede04c8f3a3601c86040a3b3f156e0d9

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/users', userRouter);
<<<<<<< HEAD
app.use('/boards', boardRouter);
app.use('/boards/:boardId/tasks', taskRouter);
=======
>>>>>>> 83c785a9ede04c8f3a3601c86040a3b3f156e0d9

module.exports = app;
