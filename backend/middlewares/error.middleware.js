const ApiError = require('../utils/ApiError');

function apiErrorHandler(err, _req, res, _next) {
  if (err instanceof ApiError) {
    res.status(err.code).json(err.message);
    return;
  }
  console.log(err);
  return res.status(500).json('DEFAULT ERROR');
}

module.exports = apiErrorHandler;