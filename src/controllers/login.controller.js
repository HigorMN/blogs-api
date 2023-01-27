const loginService = require('../services/login.service');

const auth = async (req, res) => {
  const { type, message } = await loginService.authenticate(req.body);

  if (type) return res.status(400).json({ message });

  res.status(200).json({ token: message });
};

module.exports = {
    auth,
};