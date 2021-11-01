const HTTP_STATUS = require('./HttpsCodes');

class ApiError {
  constructor(code, message) {
    this.code = code;
    this.message = message;
  }

  static allFieldsRequired() {
    return new ApiError(
      HTTP_STATUS.code.UNAUTHORIZED,
      HTTP_STATUS.ALL_FIELDS_REQUIRED,
    );
  }

  static incorrectInfos() {
    return new ApiError(
      HTTP_STATUS.code.UNAUTHORIZED,
      HTTP_STATUS.INCORRECT_INFOS,
    );
  }

  static emailExists() {
    return new ApiError(
      HTTP_STATUS.code.CONFLICT,
      HTTP_STATUS.EMAIL_ALREADY_EXIST,
    );
  }

  static invalidEntries() {
    return new ApiError(
      HTTP_STATUS.code.BAD_REQUEST,
      HTTP_STATUS.INVALID_ENTRIES,
    );
  }
  
  static invalidToken() {
    return new ApiError(
      HTTP_STATUS.code.UNAUTHORIZED,
      HTTP_STATUS.INVALID_TOKEN,
    );
  }

  static internalServerError() {
    return new ApiError(
      HTTP_STATUS.code.INTERNAL_SERVER_ERROR,
      HTTP_STATUS.INTERNAL_SERVER_ERROR,
    );
  }

  static recipeNotFound() {
    return new ApiError(
      HTTP_STATUS.code.NOT_FOUND,
      HTTP_STATUS.RECIPE_NOT_FOUND,
    );
  }

  static missingToken() {
    return new ApiError(
      HTTP_STATUS.code.UNAUTHORIZED,
      HTTP_STATUS.MISSING_TOKEN,
    );
  }
}

module.exports = ApiError;