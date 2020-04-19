const mongoose = require('mongoose');
const { MONGO_CONNECTION_STRING } = require('../common/config');

const User = require('../resources/users/user.model');
const Board = require('../resources/boards/board.model');
const Task = require('../resources/tasks/task.model');

// default data
const users = [
  new User({ name: 'Harry', login: 'potter', password: 'tomredl' }),
  new User({ name: 'Hermiona', login: 'hermiona', password: 'sksk' })
];
const boards = [
  new Board({ title: 'First Board', columns: [] }),
  new Board({ title: 'Second Board', columns: [] })
];
const tasks = [
  new Task({
    title: 'Task 1',
    order: 1,
    description: 'Hello World',
    userId: '13',
    boardId: '24',
    columnId: '32'
  }),
  new Task({
    title: 'Task 21',
    order: 1,
    description: '2 World',
    userId: '13',
    boardId: '24',
    columnId: '32'
  })
];

const connectToMongo = callback => {
  mongoose.connect(MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    // drop and create data
    db.dropDatabase();
    users.forEach(user => user.save());
    boards.forEach(board => board.save());
    tasks.forEach(task => task.save());
    console.log('mongoose is connected');
    callback();
  });
};

module.exports = connectToMongo;
