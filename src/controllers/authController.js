const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const UserDTO = require('../dto/userDTO');

const authController = {
  async register(req, res) {
    try {
      const { first_name, last_name, email, age, password } = req.body;
      const hashedPassword = bcrypt.hashSync(password, 10);
      const user = new User({ first_name, last_name, email, age, password: hashedPassword });
      await user.save();
      res.status(201).json({ message: 'Usuario registrado con éxito' });
    } catch (error) {
      res.status(500).json({ error: 'Error al registrar usuario' });
    }
  },

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({ error: 'Credenciales inválidas' });
      }

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.cookie('token', token, { httpOnly: true });
      res.json({ message: 'Login exitoso' });
    } catch (error) {
      res.status(500).json({ error: 'Error al iniciar sesión' });
    }
  },

  currentUser(req, res) {
    const userDTO = new UserDTO(req.user);
    res.json(userDTO);
  }
};

module.exports = authController;
