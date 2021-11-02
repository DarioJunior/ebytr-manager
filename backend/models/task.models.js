const connection = require('./connection');

async function addTaskInDB(taskInfo, userId) {
  const { taskNameValue, taskDescriptionValue, taskDateValue, taskStatusValue } = taskInfo;
  const result = await connection()
  .then((db) => db.collection('tasks')
  .insertOne({
     name: taskNameValue,
     description: taskDescriptionValue,
     date: taskDateValue,
     status: taskStatusValue,
     userId,
  }));
  
  if (result.insertedId) {
    return true;
  }
  return false;
}

async function getTasksByUserInDB(userId) {
  const result = await connection()
  .then((db) => db.collection('tasks')
  .find({ userId }).toArray());

  if (result) {
    return result;
  }

  return false;
}

module.exports = {
  addTaskInDB,
  getTasksByUserInDB,
};