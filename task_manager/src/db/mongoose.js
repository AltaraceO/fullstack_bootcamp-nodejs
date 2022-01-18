const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api");

// const dishes = new Task({
//   description: "do the dishes",
// });

// dishes
//   .save()
//   .then(() => console.log(dishes))
//   .catch((e) => console.log(e));

// clean
//   .save()
//   .then(() => console.log(clean))
//   .catch((e) => console.log(e));

// const you = new User({
//   name: "Liad",
//   email: "liad@gmail.com",
//   age: 35,
// });

// const youToo = new User({
//   name: "Liad",
//   email: "liad@gmail.com",
//   password: "123456 password",
//   age: 35,
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((e) => {
//     console.log(e);
//   });
// youToo
//   .save()
//   .then(() => {
//     console.log(you);
//   })
//   .catch((e) => {
//     console.log(e);
//   });
