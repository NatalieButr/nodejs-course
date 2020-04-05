const Task = require('./task.model')

let tasks =  [ new Task({title: 'Task 1', order: 1, description: 'Hello World', userId: '13', boardId: '24', columnId: '32'}),
               new Task({title: 'Task 21', order: 1, description: '2 World', userId: '13', boardId: '24', columnId: '32'})
              ]

const getAll = async (boardId) => {
  return tasks.filter(task => task.boardId === boardId);
};

const getTask = async(id) => {
  return tasks.find(task => task.id === id)
}

const createTask = async (data) => {
  console.log(data, 'create task')
  let newTask = new Task(data)
  await tasks.push(newTask);
  console.log(tasks)
  return newTask;
}

const updateTask = async (newData) => {
  console.log(data, 'update task')
  return tasks = tasks.map(item => {
    if(item.id === newData.id) {
      return {...newData}
    } else return item
  })
  return tasks = tasks.find(item => item.id === newData.id)
}

const deleteTask = async (id) => {
  return tasks = tasks.filter(task => task.id !== id)
}

module.exports = { getAll, getTask, createTask, updateTask, deleteTask, tasks };
