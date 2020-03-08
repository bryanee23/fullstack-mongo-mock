const Product = require('./index.js'); //import from index to invoke documents
//what is product? need to import documnet
//need to import name aka "groceries"

// console.log(Product)
// complete the dbhelpers
const helpers = {
  getProductsHelper: () => Product.find({}), // allows me to use promises on controller side
  // postProductsHelper: () => (/* (something).find()*/ ), // allows me to use promises on controller side
  // updateProductHelper: () => (/* (something).find()*/ ), // allows me to use promises on controller side
  // deleteProductHelper: () => (/* (something).find()*/ ), // deleteOne()// allows me to use promises on controller side
};

module.exports = helpers