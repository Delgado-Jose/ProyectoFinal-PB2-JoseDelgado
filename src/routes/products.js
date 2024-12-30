const express = require('express');
const passport = require('passport');
const { isAdmin } = require('../middlewares/auth');
const productController = require('../controllers/productController');
const router = express.Router();

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  isAdmin,
  productController.createProduct
);
router.get('/', productController.getAllProducts);
module.exports = router;
