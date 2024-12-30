const cartDAO = require('../dao/cartDAO.js');
const productDAO = require('../dao/productDAO.js');
const Ticket = require('../models/ticket.js');

exports.processPurchase = async (cartId, userEmail) => {
  const cart = await cartDAO.findById(cartId);
  if (!cart) throw new Error('Carrito no encontrado');

  let total = 0;
  const productsNotProcessed = [];

  for (const item of cart.products) {
    const product = item.product;
    if (product.stock >= item.quantity) {
      await productDAO.updateStock(product._id, product.stock - item.quantity);
      total += product.price * item.quantity;
    } else {
      productsNotProcessed.push(product._id);
    }
  }

  const ticket = new Ticket({
    code: `TICKET-${Date.now()}`,
    purchase_datetime: new Date(),
    amount: total,
    purchaser: userEmail,
  });
  await ticket.save();

  cart.products = cart.products.filter((item) =>
    productsNotProcessed.includes(item.product._id)
  );
  await cartDAO.update(cart._id, cart);

  return { message: 'Compra finalizada', ticket, productsNotProcessed };
};
