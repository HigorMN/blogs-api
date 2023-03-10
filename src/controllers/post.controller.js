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

const update = async (req, res) => {
  const { title, content } = req.body;
  const { id } = req.params;

  const { type, message } = await postService.update(req.user.id, { id, title, content });

  if (type) return res.status(401).json({ message });

  return res.status(200).json(message);
};

const destroy = async (req, res) => {
  const { id } = req.params;

  const { type, message } = await postService.destroy(req.user.id, id);

  if (type === 'Unauthorized') return res.status(401).json({ message });
  if (type === 'NOT_FOUND') return res.status(404).json({ message });

  return res.status(204).json(message);
};

const search = async (req, res) => {
  const { q } = req.query;

  const result = await postService.search(q);

  return res.status(200).json(result);
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  destroy,
  search,
};