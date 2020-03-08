const Product = require('./index.js'); //import from index to invoke documents
//what is product? need to import documnet
//need to import name aka "groceries"

// console.log(Product)
// complete the dbhelpers
const helpers = {
  getProductsHelper: () => Product.find({}), // allows me to use promises on controller side
  postProductsHelper: (obj) => Product.create(obj),
  updateProductHelper: (filter, update) => Product.findOneAndUpdate(filter, update),
  deleteProductHelper: (obj) => Product.deleteOne(obj),
  deleteAllProductHelper: () => Product.deleteMany({}),
};

module.exports = helpers