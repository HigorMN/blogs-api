const { Category } = require('../models');

const create = async ({ name }) => Category.create({ name });

const findAll = async () => Category.findAll();

module.exports = {
  create,
  findAll,
};