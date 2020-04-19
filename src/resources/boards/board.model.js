const uuid = require('uuid');
const mongoose = require('mongoose');

const columnSchema = require('../columns/column.model');

const boardSchema = new mongoose.Schema(
  {
    title: String,
    columns: [columnSchema],
    password: String,
    _id: {
      type: String,
      default: uuid
    }
  },
  { versionKey: false }
);

boardSchema.statics.toResponse = board => {
  if (!board) return {};
  const { id, title, columns } = board;
  return { id, title, columns };
};

const Board = mongoose.model('Board', boardSchema);
module.exports = Board;
