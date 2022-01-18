const mongoose = require("mongoose");

const url = "mongodb://127.0.0.1:27017/product-api";

mongoose.connect(url);

// const first = new Product({
//   name: "NEW-boots",
//   category: "clothing",
//   details: {
//     description: "a nice pair of boots",
//     price: 1233,
//     discount: 20,
//     images: [{ img1: "url" }, { img2: "url" }],
//     phoneNumber: 05267,
//   },
// });
// const second = new Product({
//   name: "Bag",
//   category: "clothing",
//   details: {
//     description: "a massive bag",
//     price: 13233,
//     images: [{ img1: "url" }, { img2: "url" }, { img3: "url" }],
//     phoneNumber: 05267,
//   },
// });
// const third = new Product({
//   name: "belt",
//   category: "accessories",
//   details: {
//     description: "extra large belt",
//     price: 13233,
//     images: [{ img1: "url" }, { img2: "url" }, { img3: "url" }],
//     phoneNumber: 05267,
//   },
// });

// third
//   .save()
//   .then(() => console.log(third))
//   .catch((e) => console.log(e));
