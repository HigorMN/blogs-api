const { User } = require('../models');
const { generateToken } = require('../utils/JWT');

const authenticate = async ({ email, password }) => {
  const student = await User.findOne({
    attributes: ['id', 'display_name', 'email'],
    where: { email, password },
  });

  if (!student) return { type: 'Invalid', message: 'Invalid fields' };

  const token = generateToken(student.dataValues);

  return { token };
};

module.exports = {
  authenticate,
};