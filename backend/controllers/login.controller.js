const ApiError = require('../utils/ApiError');
const HTTP_STATUS = require('../utils/HttpsCodes');

const UserService = require('../services/user.services');
const generateJWT = require('../utils/JTWTokenGenerator');

async function logIn(req, res, next) {
  try {
    const { email, password } = req.body;
    const result = await UserService.getUserByEmail(email, password);
    if (!result) {
      return next(ApiError.incorrectInfos());
    }

    const token = generateJWT(result);
    return res.status(HTTP_STATUS.code.OK).json({ token, result });
  } catch (err) {
    return next(ApiError.internalServerError());
  }
}

module.exports = {
  logIn,
};
