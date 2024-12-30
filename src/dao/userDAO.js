const User = require('../models/user.js');

class UserDAO {
  async findById(id) {
    return User.findById(id);
  }

  async findByEmail(email) {
    return User.findOne({ email });
  }

  async create(userData) {
    const user = new User(userData);
    return user.save();
  }
}

module.exports = new UserDAO();
