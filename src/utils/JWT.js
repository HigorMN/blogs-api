const jwt = require('jsonwebtoken');
 
const JWT_SECRET = process.env.JWT_SECRET || 'secret';

const generateToken = (login) =>
  jwt.sign(login, JWT_SECRET, { expiresIn: '1h', algorithm: 'HS256' });

module.exports = {
  generateToken,
};