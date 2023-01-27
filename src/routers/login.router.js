const express = require('express');

const loginController = require('../controllers/login.controller');
const validateLogin = require('../middlewares/validate.login');

const router = express.Router();

router.post('/', validateLogin, loginController.auth);

module.exports = router;