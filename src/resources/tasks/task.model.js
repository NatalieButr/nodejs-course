const uuid = require('uuid');


class Task {
  constructor({
    id = uuid(),
    title = 'task',
    order = 'order',
    description = "description",
    userId = null, //assignee
    boardId = null,
    columnId = null
  } = {}) {
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
