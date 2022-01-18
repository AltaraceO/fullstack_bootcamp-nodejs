const express = require("express");
const Product = require("./models.js/product");
require("./mongooseProduct");
const app = express();

app.use(express.json());

app.get("/products", (req, res) => {
  Product.find({})
    .then((product) => {
      if (!product) {
        return res.status(400);
      }
      res.status(200).send(product);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
});

app.get("/products/active", (req, res) => {
  Product.find({ isActive: true })
    .then((product) => {
      if (!product) {
        return res.status(400);
      }
      res.status(200).send(product);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
});

app.get("/products/range", (req, res) => {
  Product.find({ "details.price": { $gte: 500, $lte: 3000 } })
    .then((product) => {
      if (!product) {
        return res.status(400);
      }
      res.status(200).send(product);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
});

app.get("/products/:id", (req, res) => {
  const _id = req.params.id;

  Product.findById(_id)
    .then((product) => {
      if (!product) {
        return res.status(400).send();
      }
      res.status(200).send(product);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
});

app.post("/products", (req, res) => {
  const product = new Product(req.body);

  product
    .save()
    .then(() => res.status(201).send(product))
    .catch((e) => res.status(400).send(e.message));
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
