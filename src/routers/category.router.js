const express = require('express');

const categoryController = require('../controllers/category.controller');
const authToken = require('../middlewares/authToken');
const validateName = require('../middlewares/validateName');

const router = express.Router();

router.post('/', authToken, validateName, categoryController.create);

module.exports = router;