const mongoose = require("mongoose");
const { Schema } = mongoose;
const url = "mongodb://127.0.0.1:27017/product-api";

mongoose.connect(url);

const productDetails = new Schema({
  description: {
    minlength: 10,
    type: String,
    required: true,
  },

  price: {
    required: true,
    type: Number,
    validate(value) {
      if (value < 0) {
        throw new Error("Must be a positive number");
      }
    },
  },

  discount: {
    type: Number,
    default: 0,
  },

  images: {
    type: Array,
    validate(val) {
      if (val.length < 1) {
        throw new Error("Two images must be included");
      }
    },
  },

  phoneNumber: {
    type: Number,
    required: true,
  },

  date: {
    type: Date,
  },
});

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },

  category: {
    type: String,
    required: true,
  },

  isActive: {
    type: Boolean,
    default: false,
  },

  details: productDetails,
});

const Product = mongoose.model("Product", productSchema);

const first = new Product({
  name: "NEW-boots",
  category: "clothing",
  details: {
    description: "a nice pair of boots",
    price: 1233,
    discount: 20,
    images: [{ img1: "url" }, { img2: "url" }],
    phoneNumber: 05267,
  },
});
const second = new Product({
  name: "Bag",
  category: "clothing",
  details: {
    description: "a massive bag",
    price: 13233,
    images: [{ img1: "url" }, { img2: "url" }, { img3: "url" }],
    phoneNumber: 05267,
  },
});
const third = new Product({
  name: "belt",
  category: "accessories",
  details: {
    description: "extra large belt",
    price: 13233,
    images: [{ img1: "url" }, { img2: "url" }, { img3: "url" }],
    phoneNumber: 05267,
  },
});

third
  .save()
  .then(() => console.log(third))
  .catch((e) => console.log(e));
