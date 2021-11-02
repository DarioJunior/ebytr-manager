const connection = require('./connection');

async function addTaskInDB(taskInfo) {
  const { name, description, userId, status } = taskInfo;
  const result = await connection()
  .then((db) => db.collection('tasks')
  .insertOne({
    name,
    description,
    userId,
    status,
  }));
  
  if (result.insertedId) {
    return true;
  }
  return false;
}

module.exports = {
  addTaskInDB,
};