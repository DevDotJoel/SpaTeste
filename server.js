const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const products=[
  {
    id:1,
    name:"garrafa de agua"
  }
]
app.get('/api/products', (req, res) => {
  res.send(products)
})
app.post('/api/products/add', (req, res) => {
  let id=products[products.length].id+1;
  let product={
    id:id,
    name:req.body.name
  }
  products.push(product)

  res.send("Added with success")
})
app.use(express.static('public'))
app.listen(port, () => {
  console.log(`A correr na porta ${port}`)
})
