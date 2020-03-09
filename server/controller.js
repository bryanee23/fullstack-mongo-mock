var helpers = require('../db/dbhelpers')

const controller = {
  get: (req, res) => {
    helpers.getProductsHelper()
      .then((results) => {
        res.status(200).json(results)
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

  },

  put: (req, res) => {
    const filter = { _id: req.params }
    const update =
    {
      item: req.body.item,
      min_cost: req.body.min_cost,
      curr_bid: req.body.curr_bid,
      ends_in: req.body.ends_in,
      image: req.body.image,
    }

    helpers.updateProductHelper(filter, update)
    .then((results) => {
      res.status(200).json('put request works')
    })
    .catch((err) => { console.log(err) })
  },

  delete: (req, res) => {
    const productID = req.params

    helpers.deleteProductHelper({ _id: productID })
    .then(() => {
      res.status(200).json('delete request works')
    })
    .catch((err) => { console.log(err) })
  },

  deleteAll: (req, res) => {

    helpers.deleteAllProductHelper()
    .then(() => {
      res.status(200).json('delete request works')
    })
    .catch((err) => { console.log(err) })
  }
}

module.exports = controller