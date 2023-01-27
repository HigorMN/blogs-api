const userService = require('../services/user.service');

const create = async (req, res) => {
  const { type, message, token } = await userService.create(req.body);

  if (type) return res.status(409).json({ message });

  return res.status(201).json({ token });
};

module.exports = {
  create,
};