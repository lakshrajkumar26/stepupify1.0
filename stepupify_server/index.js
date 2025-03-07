const express = require('express')
const app = express()
const cors = require('cors')
const products = require('./api/productsData.json')
const port = process.env.PORT || 5000;

// middleware
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send("product server is running!")
});

app.get('/products', (req, res) => {
  res.send(products)
})

// app.get('/products/:id', (req, res) => {
//   const id = parseInt(req.params.id);
//   // console.log(id)
//   const product = products.filter(b => b.id === id);
//   // console.log(product)
//   res.send(product)


app.get('/products/:id', (req, res) => {
  const prod=products.find(p => p.id === parseInt(req.params.id));
  if(!prod) res.status(404).send('this product with the given ID was not found');
  res.send(prod);

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

