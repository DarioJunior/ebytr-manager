const { ObjectId } = require('mongodb');
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

async function uptadeTaskInDB(taskInfo, userId) {
  const { taskId, taskNameValue, taskDescriptionValue, taskDateValue, taskStatusValue } = taskInfo;
  const result = await connection()
  .then((db) => db.collection('tasks')
  .updateOne(
    { _id: ObjectId(taskId), userId },
    {
      $set: {
        name: taskNameValue,
        description: taskDescriptionValue,
        date: taskDateValue,
        task: taskStatusValue,
      }
    },
  ));
  if (result.modifiedCount === 1) {
    return true;
  }
  return false;
}

async function deleteTaskInDB(taskId, userId) {
  const result = await connection()
  .then((db) => db.collection('tasks')
  .deleteOne({ _id: ObjectId(taskId), userId }));

  if (result.deletedCount === 1) return true;

  return false;
}

module.exports = {
  addTaskInDB,
  getTasksByUserInDB,
  uptadeTaskInDB,
  deleteTaskInDB,
};