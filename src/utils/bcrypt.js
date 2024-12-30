const bcrypt = require('bcrypt');

exports.hashPassword = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

exports.comparePassword = (password, hashedPassword) => {
  return bcrypt.compareSync(password, hashedPassword);
};
