const router = require('express').Router();
const LoginController = require('../controllers/login.controller');

router.post('/', LoginController.logIn);

module.exports = router;