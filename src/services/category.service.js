const { Category } = require('../models');

const create = async ({ name }) => Category.create({ name });

module.exports = {
  create,
};