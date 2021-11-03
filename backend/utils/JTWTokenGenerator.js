const jwt = require('jsonwebtoken');

const secret = 'meuTokenSuperSecreto';

const jwtConfig = {
  algorithm: 'HS256',
};

function generateJWT(user) {
  const token = jwt.sign({ data: user }, secret, jwtConfig);
  return token;
}

module.exports = generateJWT;