const mongoConnection = require('./connection');

async function getUserByEmailInDB(userEmail) {
  const result = await mongoConnection()
  .then((db) => db.collection('users')
  .findOne({ email: userEmail }));
  console.log('model:', result);

  if (!result) {
    return null;
  }

  const { _id, name, email, role } = result;

  return {
    _id,
    name,
    email,
    role,
  };
}

module.exports = {
  getUserByEmailInDB,
};