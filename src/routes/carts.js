const express = require('express');
const passport = require('passport');
const cartController = require('../controllers/cartController');
const router = express.Router();


router.post(
  '/:cid/purchase',
  passport.authenticate('jwt', { session: false }),
  cartController.purchase
);

module.exports = router;
