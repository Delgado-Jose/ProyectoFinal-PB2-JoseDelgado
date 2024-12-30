const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
  products: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      quantity: { type: Number, required: true },
    },
  ],
});

module.exports = mongoose.model('Cart', CartSchema);
