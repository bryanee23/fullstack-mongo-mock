const mongoose = require('mongoose');
// Complete the productSchema below.
const productSchema = new mongoose.Schema({
  item: String,
  min_cost: Number,
  curr_bid: Number,
  ends_in: Number,
  image: String,
});

module.exports = productSchema;
