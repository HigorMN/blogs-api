const { BlogPost, PostCategory, User, Category } = require('../models');

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

const findAll = async () => 
  BlogPost.findAll({ include: [
    { model: User, as: 'user', attributes: { exclude: 'password' } },
    { model: Category, as: 'categories', through: { attributes: [] } },
  ] });

const findById = async (id) => {
  const result = await BlogPost.findOne({ 
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ], 
  });
  console.log(result);
  if (!result) return { type: 'NOT_FOUND', message: 'Post does not exist' };

  return { type: null, message: result };
};

module.exports = {
  create,
  findAll,
  findById,
};