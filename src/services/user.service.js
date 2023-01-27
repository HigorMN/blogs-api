const { User } = require('../models');
const loginService = require('./login.service');

const create = async ({ displayName, email, password, image }) => {
  try {
    const result = await User.create({ displayName, email, password, image });
    const { type, message, token } = await loginService.authenticate(result);
    if (type) return { message };

    return { type: null, token };
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      return { type: 'CONFLIT', message: 'User already registered' };
    } 
      throw error;
  }
};

const findById = async (id) => User.findByPk(id);

module.exports = {
  create,
  findById,
};