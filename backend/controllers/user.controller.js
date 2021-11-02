const ApiError = require('../utils/ApiError');
const UserService = require('../services/user.services');

async function getUserByEmail(req, res, next) {
  try {
    const { email, password } = req.body;
    const result = await UserService.getUserByEmail(email, password);
 
    if (!result) {
      return next(ApiError.incorrectInfos());
    }
    return res.status(200).json(result);
  } catch (err) {
    return next(ApiError.internalServerError());
  }
}

module.exports = {
  getUserByEmail,
};
