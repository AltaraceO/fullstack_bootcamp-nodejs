const express = require("express");
const router = new express.Router();
const Product = require("../models.js/product");

router.get("/products", async (req, res) => {
  try {
    const productz = await Product.find({});
    if (!productz) {
      res.status(400).send("none found");
    }
    res.status(201).send(productz);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

router.get("/products/active", async (req, res) => {
  try {
    const activeProds = await Product.find({ isActive: true });
    if (!activeProds) {
      res.status(400).send("none found");
    }
    res.status(200).send(activeProds);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

router.get("/products/range", async (req, res) => {
  try {
    const prodRange = await Product.find({
      "details.price": { $gte: 500, $lte: 3000 },
    });
    if (!prodRange) {
      res.status(400).send("not found in range");
    }
    res.status(200).send(prodRange);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

router.get("/products/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const prod = await Product.findById(_id);
    if (!prod) {
      res.status(400).send("No product matches");
    }
    res.status(200).send(prod);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

router.post("/products", async (req, res) => {
  const product = new Product(req.body);

  try {
    await product.save();
    res.status(201).send(product);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

router.patch("products/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdate = ["name", "email", "password", "age"];
  const isValidOperation = updates.every((update) => {
    return allowedUpdate.includes(update);
  });

  if (!isValidOperation) {
    res.status(400).send({ error: "invalid update option" });
  }

  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!product) {
      return res.status(400).send();
    }

    res.send(prod);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

router.delete("/product/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      res.status(400).send();
    }

    res.status(200).send(product);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
module.exports = router;
