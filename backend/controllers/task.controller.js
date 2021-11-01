const TESTE = 'TESTE';

async function getTasks(_req, res, _next) {
  res.status(200).send(TESTE);
}

module.exports = {
  getTasks,
};
