const mongoose = require("mongoose");

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
  //every task has its own author and this is the link back to that user
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    //Below is a reference to the owner of the comment
    ref: "User",
  },
});

// refactor

module.exports = Task;
