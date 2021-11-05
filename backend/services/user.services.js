const UserModel = require('../models/user.models');

async function getUserByEmail(email, password) {
  const result = await UserModel.getUserByEmailInDB(email, password);

  return result;
}

module.exports = {
  getUserByEmail,
};
