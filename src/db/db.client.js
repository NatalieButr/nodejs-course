const mongoose = require('mongoose');
const { MONGO_CONNECTION_STRING } = require('../common/config');

const User = require('../resources/users/user.model');
// data

const users = [
  new User({ name: 'Harry', login: 'potter', password: 'tomredl' }),
  new User({ name: 'Hermiona', login: 'hermiona', password: 'sksk' })
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
    console.log('mongoose connected');
    db.dropDatabase();
    users.forEach(user => user.save());
    callback();
  });
};

module.exports = connectToMongo;
