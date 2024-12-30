const Product = require('../models/product.js');

const productController = {
  async createProduct(req, res) {
    try {
      const { name, price, stock, description } = req.body;
      const product = new Product({ name, price, stock, description });
      await product.save();
      res.status(201).json({ message: 'Producto creado con éxito', product });
    } catch (error) {
      res.status(500).json({ error: 'Error al crear producto', details: error.message });
    }
  },

  async getAllProducts(req, res) {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener productos' });
    }
  }
};

module.exports = productController;
