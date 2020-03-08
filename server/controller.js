var helpers = require('../db/dbhelpers')
// var insertMockData = require('../db/seed')
// insertMockData()

const controller = {
  get: (req, res) => {
    helpers.getProductsHelper()
      .then((results) => {
        res.status(200).json(`${results}`)
      })
      .catch((err) => { console.log(err) })
  },

  post: (req, res) => {
    const item =
    {
      item: req.body.item,
      min_cost: req.body.min_cost,
      curr_bid: req.body.curr_bid,
      ends_in: req.body.ends_in,
      image: req.body.image,
    }

    helpers.postProductsHelper(item)
    .then(() => {
      res.status(200).json(`${item.item} inserted`)
    })
    .catch((err) => { console.log(err) })
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
    const productID = req.params

    helpers.deleteProductHelper()
    .then(() => {
      res.status(200).json('delete request works')
    })
    .catch((err) => { console.log(err) })
  },
  deleteAll: (req, res) => {
    const productID = req.params

    helpers.deleteAllProductHelper()
    .then(() => {
      res.status(200).json('delete request works')
    })
    .catch((err) => { console.log(err) })
  }
}

module.exports = controller