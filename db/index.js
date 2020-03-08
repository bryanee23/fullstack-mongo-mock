const mongoose = require('mongoose');
var productSchema = require('./schema.js');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/ebidProducts', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // Product.create(
  //   {
  //     item: "socks",
  //     min_cost: 2,
  //     curr_bid: 44,
  //     ends_in: 43,
  //     image: "imgURL",
  //   }
  // ) //to test

  console.log("---------------------- DB up")
});

//"document" name is called product
var Product = mongoose.model('list', productSchema);

module.exports = Product;

// productSchema = mongoose.Schema({
//   name: String
// });

///////////////////////////////////////
/////// original code save if case stuff breaks
///////////////////////////////////////
// // build your database
// var mongoose = require('mongoose');
// var productSchema = require('./schema.js');
// var mongoUri = 'mongodb://localhost/ebidProducts';
// // allow use of es6 promises
// mongoose.Promise = global.Promise;

// // Connect Mongoose to our local MongoDB via URI specified above and export it below
// var db;

// // Register the productSchema with Mongoose as the 'Product' collection.
// var Product;










