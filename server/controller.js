// Controller here
// complete building out the controller
var Product = require('../db/')
//{helpers} = require

const controller = {
  get: (req, res) => {
    res.status(200).json('get request works')
/*
hit this with a get request
can create seed here
invoke helpers
getProductsHelper().then((results)=>{
  send results back to client
  res.status.send(results)
}
*/
  },

  post: (req, res) => {
    res.status(200).json('post request works')
    //console.log(req.body)
    //use req.body
    //use req.body as arguments to call deHelpers
    /*
hit this with a post request

invoke helpers ---- with req.body arguments!!!!!!!!!---------
postProductsHelper().then((results)=>{
  send results back to client
  res.status.send(results)
}
*/
  },
  put: (req, res) => {
    res.status(200).json('put request works')
    /*
const filter = {}
const update = {}
invoke helpers
updateProductHelper

*/
  },
  delete: (req, res) => {
    res.status(200).json('delete request works')
     /*
invoke deleteProductHelper

*/
  }
}

module.exports = controller