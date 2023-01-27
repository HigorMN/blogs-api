const categoryService = require('../services/category.service');

const create = async (req, res) => {
  const category = await categoryService.create(req.body);

  return res.status(201).json(category);
};

const getCategory = async (req, res) => {
  const category = await categoryService.findAll();

  return res.status(200).json(category);
};

module.exports = {
  create,
  getCategory,
};