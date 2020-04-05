const uuid = require('uuid');
const Column = require('../../helpers/column.model');

class Board {
  constructor({ id = uuid(), title, columns } = { title, columns }) {
    this.id = id;
    this.title = title;
    this.columns =
      columns !== undefined && columns.length
        ? columns.map(item => new Column(item))
        : null;
  }
}

module.exports = Board;
