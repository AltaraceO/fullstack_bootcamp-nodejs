const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api");

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("email invalid");
      }
    },
  },
  password: {
    required: true,
    type: String,
    trim: true,
    minLength: 6,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error('cannot include "password"');
      }
    },
  },
  age: {
    default: 0,
    type: Number,
    validate(value) {
      if (value < 0) {
        throw new Error("age needs to be a positive number");
      }
    },
  },
});

const Task = mongoose.model("Task", {
  description: {
    required: true,
    type: String,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const dishes = new Task({
  description: "do the dishes",
});

dishes
  .save()
  .then(() => console.log(dishes))
  .catch((e) => console.log(e));

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
