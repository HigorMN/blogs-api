const express = require('express');

const postController = require('../controllers/post.controller');
const authToken = require('../middlewares/authToken');
const validatePost = require('../middlewares/validatePost');

const router = express.Router();

router.post('/', authToken, validatePost, postController.create);

module.exports = router;