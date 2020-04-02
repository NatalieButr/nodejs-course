const uuid = require('uuid');


class Board
  constructor({
    id = uuid(),
    title = 'BOARD',
    columns = '5',
    password = 'P@55w0rd'
  } = {}) {
    this.id = id;
    this.title = tile;
    this.columns = columns;
  }
}

module.exports = Board;
