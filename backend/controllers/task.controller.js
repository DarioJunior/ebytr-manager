const ApiError = require('../utils/ApiError');
const HTTP_STATUS = require('../utils/HttpsCodes');
const TaskService = require('../services/task.services');

async function getTasks(_req, res, _next) {
  res.status(200).send('TESTE');
}

async function addTask(req, res, next) {
  try {
    const taskInfo = req.body;
    const addictedTask = await TaskService.addTask(taskInfo);

    if (addictedTask) {
      return res.status(HTTP_STATUS.code.CREATED).send('Task adicionada com sucesso');
    }
    return next(ApiError.allFieldsRequired());
  } catch (err) {
    return next(ApiError.internalServerError());
  }
}

module.exports = {
  getTasks,
  addTask,
};
