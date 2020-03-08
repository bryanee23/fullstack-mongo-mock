// // Express Server
// // FIX ME :(
//   const express = require('express');
const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');
const bodyParser = require('body-parser');

const router = require('./router');

const port = 3000;
const server = express();

server.use('/', express.static(path.join(__dirname + '/../client/dist')));

server.listen(port, () => console.log('Connected to port: 3000'))


server.get('/name', (req, res) => {
  res.status(200).send('This is your get request, modify this file to use your router!')
})

server.post('/name', (req, res) => {
  res.status(200).send('This is your post request, modify this file to use your router!')
})

server.put('/name', (req, res) => {
  res.status(200).send('This is your put request, modify this file to use your router!')
})

server.delete('/name', (req, res) => {
  res.status(200).send('This is your delete request, modify this file to use your router!')
})


  // const express = require('express')
  // const app = express()
  // const port = 3000

  // app.get('/', (req, res) => res.send('Hello World!'))

  // app.listen(port, () => console.log(`Example app listening on port ${port}!`))