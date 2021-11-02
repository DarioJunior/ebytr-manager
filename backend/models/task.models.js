const connection = require('./connection');

async function addTaskInDB(taskInfo) {
  const { taskNameValue, taskDescriptionValue, taskDateValue, taskStatusValue, userId } = taskInfo;
  console.log(taskNameValue, taskDescriptionValue, taskDateValue, taskStatusValue, userId);
  const result = await connection()
  .then((db) => db.collection('tasks')
  .insertOne({
     taskNameValue,
     taskDescriptionValue,
     taskDateValue,
     taskStatusValue,
     userId,
  }));
  
  if (result.insertedId) {
    return true;
  }
  return false;
}

module.exports = {
  addTaskInDB,
};