const ApiError = require('../utils/ApiError');
const HTTP_STATUS = require('../utils/HttpsCodes');
const TaskService = require('../services/task.services');

async function getTasksByUser(req, res, next) {
  try {
    // const userId = req;
    const userId = 'admin';
    const allTasksByUser = await TaskService.getTasksByUser(userId);

    if (allTasksByUser.length === 0) {
      return next(ApiError.tasksNotFound());
    }

    if (allTasksByUser) {
      return res.status(HTTP_STATUS.code.OK).json(allTasksByUser);
    }

    return next(ApiError.incorrectInfos());
  } catch (err) {
    return next(ApiError.internalServerError());
  }
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
  getTasksByUser,
  addTask,
};
