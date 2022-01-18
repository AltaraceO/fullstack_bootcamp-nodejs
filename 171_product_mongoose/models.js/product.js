const mongoose = require("mongoose");
const { Schema } = mongoose;

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

module.exports = Product;
