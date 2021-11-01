const HTTP_STATUS = {
  code: {
    BAD_REQUEST: 400,
    CONFLICT: 409,
    CREATED: 201,
    INTERNAL_SERVER_ERROR: 500,
    NO_CONTENT: 204,
    NOT_FOUND: 404,
    OK: 200,
    UNAUTHORIZED: 401,
  },
    ALL_FIELDS_REQUIRED: { message: 'All fields must be filled' },
    EMAIL_ALREADY_EXIST: { message: 'Email already registered' },
    INCORRECT_INFOS: { message: 'Incorrect username or password' },
    INTERNAL_SERVER_ERROR: { message: 'Internal Server Error.' },
    INVALID_ENTRIES: { message: 'Invalid entries. Try again.' },
    INVALID_TOKEN: { message: 'jwt malformed' },
    MISSING_TOKEN: { message: 'missing auth token' },
    RECIPE_NOT_FOUND: { message: 'recipe not found' },
};

module.exports = HTTP_STATUS;