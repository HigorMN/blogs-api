const express = require('express');

const postController = require('../controllers/post.controller');
const authToken = require('../middlewares/authToken');
const validatePost = require('../middlewares/validatePost');
const validateCategoryIds = require('../middlewares/validateCategoryIds');

const router = express.Router();

router.post('/', authToken, validatePost, validateCategoryIds, postController.create);
router.get('/', authToken, postController.getAll);
router.get('/:id', authToken, postController.getById);
router.put('/:id', authToken, validatePost, postController.update);
router.delete('/:id', authToken, postController.destroy);

module.exports = router;