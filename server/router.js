// Router here
// these routes are correct. there is no need to modify anything!
const router = require('express').Router();
const controller = require('./controller.js');

router //get all and post one
  .route('/products')
  .get(controller.get)
  .post(controller.post)

router // update delete one
  .route('/products/:_id')
  .put(controller.put)
  .delete(controller.delete)

router //delete all
  .route('/products/')
  .delete(controller.deleteAll)

module.exports = router
