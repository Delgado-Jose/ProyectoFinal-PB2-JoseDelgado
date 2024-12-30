const Cart = require('../models/cart.js');
const ProductDAO = require('../dao/productDAO.js');
const Ticket = require('../models/ticket.js');

const cartController = {
  async purchase(req, res) {
    try {
      const cart = await Cart.findById(req.params.cid).populate('products.product');
      if (!cart) return res.status(404).json({ error: 'Carrito no encontrado' });

      let total = 0;
      const productsNotProcessed = [];

      for (const item of cart.products) {
        const product = item.product;
        if (product.stock >= item.quantity) {
          await ProductDAO.updateStock(product._id, product.stock - item.quantity);
          total += product.price * item.quantity;
        } else {
          productsNotProcessed.push(product._id);
        }
      }

      const ticket = new Ticket({
        code: `TICKET-${Date.now()}`,
        amount: total,
        purchaser: req.user.email,
      });
      await ticket.save();

      cart.products = cart.products.filter((item) =>
        productsNotProcessed.includes(item.product._id)
      );
      await cart.save();

      res.json({ message: 'Compra finalizada', ticket, productsNotProcessed });
    } catch (error) {
      res.status(500).json({ error: 'Error al procesar la compra' });
    }
  }
};

module.exports = cartController;
