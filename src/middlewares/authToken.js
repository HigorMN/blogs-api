const jwt = require('jsonwebtoken');
const userService = require('../services/user.service');

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ message: 'Token not found' });

  try {
    const verificationResponse = await jwt.verify(token, JWT_SECRET);
    const user = await userService.findById(verificationResponse.id);

    // if (!user) return res.status(401).json({ message: 'Expired or invalid token' });

    req.user = user;

    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};