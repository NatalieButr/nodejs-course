const uuid = require('uuid');
const mongoose = require('mongoose');

const Column = require('../columns/column.model');

const boardSchema = new mongoose.Schema(
  {
    title: String,
    columns: Array,
    password: String,
    _id: {
      type: String,
      default: uuid
    }
  },
  { versionKey: false }
);

const Board = mongoose.model('Board', boardSchema);

// class Board {
//   constructor({ id = uuid(), title, columns } = { title, columns }) {
//     this.id = id;
//     this.title = title;
//     this.columns =
//       columns !== undefined && columns.length
//         ? columns.map(item => new Column(item))
//         : null;
//   }
// }

module.exports = Board;
