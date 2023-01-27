const jwt = require('jsonwebtoken');
 
const JWT_SECRET = process.env.JWT_SECRET || 'secret';

const generateToken = (login) =>
  jwt.sign({ login }, JWT_SECRET, { expiresIn: '5d' });

module.exports = {
  generateToken,
};