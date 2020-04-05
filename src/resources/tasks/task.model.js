const uuid = require('uuid');


class Task {
  constructor({
    id = uuid(),
    title,
    order,
    description,
    userId, 
    boardId,
    columnId,
  } = { boardId, title, order, userId, columnId, description }) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }
}

module.exports = Task;
