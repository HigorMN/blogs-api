const { User } = require('../models');
const loginService = require('./login.service');

const create = async ({ displayName, email, password, image }) => {
  try {
    const result = await User.create({ displayName, email, password, image });
    const { type, message } = await loginService.authenticate(result);
    if (type) return { type, message };

    return { type: null, message };
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      return { type: 'CONFLIT', message: 'User already registered' };
    } 
  }
};

const findById = async (id) => User.findByPk(id);

const findAll = async () => User.findAll({ attributes: { exclude: 'password' } });

module.exports = {
  create,
  findById,
  findAll,
};