const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.JWT_SECRET || 'secret123';

exports.generateToken = (user) => {
  return jwt.sign({ id: user._id, email: user.email, role: user.role }, SECRET_KEY, {
    expiresIn: '1h',
  });
};

exports.verifyToken = (token) => {
  return jwt.verify(token, SECRET_KEY);
};
