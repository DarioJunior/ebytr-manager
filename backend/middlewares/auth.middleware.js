const jwt = require('jsonwebtoken');
const ApiError = require('../utils/ApiError');

const secret = 'meuTokenSuperSecreto';

function authJWT(req, _res, next) {
  try {
    const token = req.headers.authorization;
    if (!token) return next(ApiError.missingToken());
    
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        return next(ApiError.invalidToken());
      }
      
      const { _id, role, name } = decoded.data;
      req.userName = name;
      req.userRole = role;
      req.userId = _id;
      next();
    });
  } catch (err) {
    return next(ApiError.internalServerError());
  }
}

module.exports = {
  authJWT,
};
