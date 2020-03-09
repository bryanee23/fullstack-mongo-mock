const Product = require('./index.js');

const helpers = {
  getProductsHelper: () => Product.find({}), // allows me to use promises on controller side
  postProductsHelper: (obj) => Product.create(obj),
  updateProductHelper: (filter, update) => Product.findOneAndUpdate(filter, update),
  deleteProductHelper: (obj) => Product.deleteOne(obj),
  deleteAllProductHelper: () => Product.deleteMany({}),
};

module.exports = helpers