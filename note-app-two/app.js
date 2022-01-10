// const validator = require("validator");
// const fs = require("fs");
const yargs = require("yargs");
const addFunc = require("./utils.js");
const noteFunc = require("./notes.js");

// console.log(addFunc(3, 2));
// console.log(noteFunc());

// const command = process.argv[2];

// if (command === "add") {
//   console.log("Adding Note");
// } else if (command === "remove") {
//   console.log("removing note!");
// }

//add, remove, read, list
//create add commmand

yargs.command({
  command: "add",
  describe: "add a new note",
  handler: function () {
    console.log("adding new note");
  },
});

yargs.command({
  command: "remove",
  describe: "remove a note",
  handler: function () {
    console.log("removing a note");
  },
});

yargs.command({
  command: "read",
  describe: "read  note",
  handler: function () {
    console.log("reading a note");
  },
});

yargs.command({
  command: "list",
  describe: "list  notes",
  handler: function () {
    console.log("listing notes");
  },
});

console.log(yargs.argv);
