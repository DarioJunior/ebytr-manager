const router = require('express').Router();
const TaskController = require('../controllers/task.controller');

router.get('/', TaskController.getTasks);

module.exports = router;