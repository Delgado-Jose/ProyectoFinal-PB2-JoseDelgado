const express = require('express');
const passport = require('passport');
const authController = require('../controllers/authController');
const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get(
  '/current',
  passport.authenticate('jwt', { session: false }),
  authController.currentUser
);

module.exports = router;
