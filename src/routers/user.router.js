const express = require('express');

const userController = require('../controllers/user.controller');
const validateDisplayName = require('../middlewares/validateDisplayName');
const validateEmail = require('../middlewares/validateEmail');
const validatePassword = require('../middlewares/validatePassword');
const authToken = require('../middlewares/authToken');

const router = express.Router();

router.post('/', validateDisplayName, validateEmail, validatePassword, userController.create);
router.get('/', authToken, userController.findAll);
router.get('/:id', authToken, userController.getById);
router.delete('/me', authToken, userController.destroy);

module.exports = router;