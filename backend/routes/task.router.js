const router = require('express').Router();
const TaskController = require('../controllers/task.controller');
const AuthMiddleware = require('../middlewares/auth.middleware');

// GET's
router.get('/', AuthMiddleware.authJWT, TaskController.getTasksByUser);
// POST's
router.post('/', AuthMiddleware.authJWT, TaskController.addTask);
// PUT's
router.put('/', AuthMiddleware.authJWT, TaskController.updateTask);
// DELETE'
router.delete('/:id', AuthMiddleware.authJWT, TaskController.deleteTask);

module.exports = router;