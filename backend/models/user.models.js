const connection = require('./connection');

async function getUserByEmailInDB(userEmail) {
  const result = await connection()
  .then((db) => db.collection('users')
  .findOne({ email: userEmail }));

  return {
    name: result.name,
    email: result.email,
    role: result.role,
  };
}

module.exports = {
  getUserByEmailInDB,
};