const uuid = require('uuid');
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
  {
    title: String,
    order: String,
    description: String,
    userId: String,
    boardId: String,
    columnId: String,
    _id: {
      type: String,
      default: uuid
    }
  },
  { versionKey: false }
);

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
