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
    helpers.deleteProductHelper()
    .then(() => {
      res.status(200).json('delete request works')
    })
    .catch((err) => { console.log(err) })

    /*
invoke deleteProductHelper
//req.params
*/
  }
}

module.exports = controller