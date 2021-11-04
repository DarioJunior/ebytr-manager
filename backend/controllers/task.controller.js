const ApiError = require('../utils/ApiError');
const HTTP_STATUS = require('../utils/HttpsCodes');
const TaskService = require('../services/task.services');

async function addTask(req, res, next) {
  try {
    const taskInfo = req.body;
    const { userId } = req;
    const addictedTask = await TaskService.addTask(taskInfo, userId);

    if (addictedTask) {
      return res.status(HTTP_STATUS.code.CREATED).send('Task adicionada com sucesso');
    }
    return next(ApiError.allFieldsRequired());
  } catch (err) {
    return next(ApiError.internalServerError());
  }
}

async function getTasksByUser(req, res, next) {
  try {
    const { userId } = req;
    const allTasksByUser = await TaskService.getTasksByUser(userId);

    if (allTasksByUser.length === 0) {
      return res.status(HTTP_STATUS.code.OK).json([]);
    }

    if (allTasksByUser) {
      return res.status(HTTP_STATUS.code.OK).json(allTasksByUser);
    }

    return next(ApiError.incorrectInfos());
  } catch (err) {
    return next(ApiError.internalServerError());
  }
}

async function updateTask(req, res, next) {
  try {
    const taskInfo = req.body;
    const { userId } = req;

    const updatedResult = await TaskService.updateTask(taskInfo, userId);

    if (updatedResult) {
      return res.status(HTTP_STATUS.code.OK).send('Task atualizada com sucesso');
    }

    return next(ApiError.invalidEntries());
  } catch (err) {
    return next(ApiError.internalServerError());
  }
}

async function deleteTask(req, res, next) {
  try {
    const { id } = req.params;
    const { userId } = req;

    const updatedResult = await TaskService.deleteTask(id, userId);

    if (updatedResult) {
      return res.status(HTTP_STATUS.code.OK).send('Task deletada com sucesso');
    }
    return res.status(HTTP_STATUS.code.UNAUTHORIZED).send('Usuário não autorizado');
  } catch (err) {
    return next(ApiError.internalServerError());
  }
}

module.exports = {
  getTasksByUser,
  addTask,
  updateTask,
  deleteTask,
};
