const Product = require('../models/product.js');

class ProductDAO {
  async findAll() {
    return Product.find();
  }

  async findById(id) {
    return Product.findById(id);
  }

  async create(productData) {
    const product = new Product(productData);
    return product.save();
  }

  async updateStock(id, newStock) {
    return Product.findByIdAndUpdate(id, { stock: newStock }, { new: true });
  }
}

module.exports = new ProductDAO();
