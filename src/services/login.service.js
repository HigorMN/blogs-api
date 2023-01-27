const { User } = require('../models');
const { generateToken } = require('../utils/JWT');

const authenticate = async ({ email, password }) => {
  const student = await User.findOne({
    attributes: ['id', 'display_name', 'email'],
    where: { email, password },
  });

  if (!student) return { type: 'Invalid', message: 'Invalid fields' };

  const token = await generateToken(student.dataValues);

  return { type: null, message: token };
};

module.exports = {
  authenticate,
};