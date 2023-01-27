const userService = require('../services/user.service');

const create = async (req, res) => {
  const { type, message } = await userService.create(req.body);

  if (type) return res.status(409).json({ message });

  return res.status(201).json({ token: message });
};

const findAll = async (_req, res) => {
  const users = await userService.findAll();

  return res.status(200).json(users);
};

const getById = async (req, res) => {
  const { id } = req.params;
  
  const { type, message } = await userService.getById(id);

  if (type) return res.status(404).json({ message });

  return res.status(200).json(message);
}; 

module.exports = {
  create,
  findAll,
  getById,
};