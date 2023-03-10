const { BlogPost, PostCategory, User, Category, Sequelize } = require('../models');

const { Op } = Sequelize;

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

  if (!result) return { type: 'NOT_FOUND', message: 'Post does not exist' };

  return { type: null, message: result };
};

const update = async (userId, { id, title, content }) => {
  const [qtdUpdate] = await BlogPost.update({ title, content }, { where: { id, userId } });

  if (qtdUpdate === 0) return { type: 'Unauthorized', message: 'Unauthorized user' };
  
  const result = await findById(id);

  return { type: null, message: result.message };
};

const destroy = async (userId, id) => {
  const auth = await BlogPost.findByPk(id);

  if (!auth) return { type: 'NOT_FOUND', message: 'Post does not exist' };

  if (auth.userId !== userId) return { type: 'Unauthorized', message: 'Unauthorized user' };

  await BlogPost.destroy({ where: { id } });

  return { type: null, message: '' };
};

const search = async (query) => {
  const getAll = await findAll();

  const findByQuery = `%${query}%`;

  if (!query) return getAll;

  let posts = await BlogPost.findAll({ where: {
    [Op.or]: [
      { title: { [Op.like]: findByQuery } },
      { content: { [Op.like]: findByQuery } },
    ],
  } });

  if (posts.length > 0) {
    posts = await Promise.all(posts.map(async (e) => (await findById(e.id)).message));
  }

  return posts;
};

module.exports = {
  create,
  findAll,
  findById,
  update,
  destroy,
  search,
};