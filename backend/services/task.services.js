const TaskModel = require('../models/task.models');

async function addTask(taskInfo, userId) {
  const addictedTask = await TaskModel.addTaskInDB(taskInfo, userId);
  return addictedTask;
}

async function getTasksByUser(userId) {
  const allTasksByUser = await TaskModel.getTasksByUserInDB(userId);
  return allTasksByUser;
}

module.exports = {
  addTask,
  getTasksByUser,
};
