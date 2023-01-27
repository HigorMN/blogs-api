const postService = require('../services/post.service');

const create = async (req, res) => {
  const { type, message } = await postService.create(req.user.id, req.body);

  if (type) return res.status(400).json({ message });

  return res.status(201).json(message);
};

const getAll = async (_req, res) => {
  const posts = await postService.findAll();
  return res.status(200).json(posts);
};

const getById = async (req, res) => {
  const { type, message } = await postService.findById(req.params.id);

  if (type) return res.status(404).json({ message });

  return res.status(200).json(message);
};

module.exports = {
  create,
  getAll,
  getById,
};