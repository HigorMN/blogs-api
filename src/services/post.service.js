const { BlogPost, PostCategory } = require('../models');

const create = async (userId, { title, content, categoryIds }) => {
  const post = await BlogPost.create({ title, content, userId });

  const bulkInsert = categoryIds.map((id) => ({ postId: post.id, categoryId: id }));
  try {
    await PostCategory.bulkCreate(bulkInsert);
  } catch (error) {
    return { type: 'NOT_FOUND', message: 'one or more "categoryIds" not found' };
  }

  return { type: null, message: post };
};

module.exports = {
  create,
};