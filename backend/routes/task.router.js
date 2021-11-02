const router = require('express').Router();
const TaskController = require('../controllers/task.controller');

router.get('/', TaskController.getTasksByUser);
router.post('/', TaskController.addTask);

module.exports = router;