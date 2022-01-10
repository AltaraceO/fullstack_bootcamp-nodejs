// const validator = require("validator");
// const fs = require("fs");
const yargs = require("yargs");
// const addFunc = require("./utils.js");
const notes = require("./notes.js");
const { demandOption } = require("yargs");

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
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "note body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "remove a note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

yargs.command({
  command: "read",
  describe: "read a note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNotes(argv.title);
  },
});

yargs.command({
  command: "list",
  describe: "list  notes",
  handler() {
    notes.listNotes();
  },
});

yargs.parse();
// console.log(yargs.argv);
