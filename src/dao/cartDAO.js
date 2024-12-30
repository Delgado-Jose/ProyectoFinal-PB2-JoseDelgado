const Cart = require('../models/cart.js');

class CartDAO {
  async findById(cartId) {
    return Cart.findById(cartId).populate('products.product');
  }

  async update(cartId, cartData) {
    return Cart.findByIdAndUpdate(cartId, cartData, { new: true });
  }
}

module.exports = new CartDAO();
