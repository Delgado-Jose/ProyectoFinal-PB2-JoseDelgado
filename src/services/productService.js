const productDAO = require('../dao/productDAO');

exports.getAllProducts = async () => {
  return await productDAO.findAll();
};
