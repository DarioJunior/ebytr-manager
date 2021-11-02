const TaskModel = require('../models/task.models');

async function getTasksByUser(userId) {
  const allTasksByUser = await TaskModel.getTasksByUserInDB(userId);
  return allTasksByUser;
}
async function addTask(taskInfo) {
  const addictedTask = await TaskModel.addTaskInDB(taskInfo);
  return addictedTask;
}

module.exports = {
  addTask,
  getTasksByUser,
};
