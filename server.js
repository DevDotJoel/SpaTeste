const express = require('express')
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
 
const port = 3000
const products=[
  {
    id:1,
    name:"garrafa de agua",
    price:0.90
  },
  {
    id:2,
    name:"Baguette de Atum",
    price:1.90
  },
  {
    id:3,
    name:"Mil Folhas",
    price:1.10
  }
]
app.get('/api/products', (req, res) => {
  res.send(products)
})
app.post('/api/products/add', (req, res) => {
  let id=products[products.length-1].id+1;
  let product={
    id:id,
    name:req.body.name,
    price:req.body.price
  }
  products.push(product)

  res.send("Added with success")
})
app.use(express.static('public'))
app.listen(port, () => {
  console.log(`A correr na porta ${port}`)
})
