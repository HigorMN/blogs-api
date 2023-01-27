const userService = require('../services/user.service');

const create = async (req, res) => {
  const { type, message, token } = await userService.create(req.body);

  if (type) return res.status(409).json({ message });

  return res.status(201).json({ token });
};

const findAll = async (_req, res) => {
  const users = await userService.findAll();

  return res.status(200).json(users);
};

module.exports = {
  create,
  findAll,
};