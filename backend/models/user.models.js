const connection = require('./connection');

async function getUserByEmailInDB(userEmail) {
  const result = await connection()
  .then((db) => db.collection('users')
  .findOne({ email: userEmail }));

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