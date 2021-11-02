const TaskModel = require('../models/task.models');

async function addTask(taskInfo) {
  const addictedTask = await TaskModel.addTaskInDB(taskInfo);
  return addictedTask;
}

module.exports = {
  addTask,
};
