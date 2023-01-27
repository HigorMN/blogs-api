const jwt = require('jsonwebtoken');
 
const JWT_SECRET = process.env.JWT_SECRET || 'secret';

const generateToken = (login) =>
  jwt.sign({ login }, JWT_SECRET, { expiresIn: '5d' });

const authToken = async (token) => {
  if (!token) {
    const error = new Error('missing auth token');
    error.status = 401;
    throw error;
  }

  try {
    const verificationResponse = await jwt.verify(token, JWT_SECRET);
    return verificationResponse;
  } catch (err) {
    const error = new Error('jwt malformed');
    error.status = 401;
    throw error;
  }
};

module.exports = {
  generateToken,
  authToken,
};