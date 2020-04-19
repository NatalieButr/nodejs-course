const uuid = require('uuid');
const mongoose = require('mongoose');

const columnSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuid,
    alias: 'id'
  },
  title: String,
  order: Number
});

module.exports = columnSchema;
