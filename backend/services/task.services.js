const TaskModel = require('../models/task.models');

async function addTask(taskInfo, userId) {
  const addictedTask = await TaskModel.addTaskInDB(taskInfo, userId);
  return addictedTask;
}

async function getTasksByUser(userId) {
  const allTasksByUser = await TaskModel.getTasksByUserInDB(userId);
  return allTasksByUser;
}

async function updateTask(taskInfo, userId) {
  const updatedTask = await TaskModel.uptadeTaskInDB(taskInfo, userId);
  return updatedTask;
}

async function deleteTask(taskId) {
  const deletedTask = await TaskModel.deleteTaskInDB(taskId);
  return deletedTask;
}

module.exports = {
  addTask,
  getTasksByUser,
  updateTask,
  deleteTask,
};
