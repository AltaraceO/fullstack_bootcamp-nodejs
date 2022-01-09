// const validator = require("validator");
// const chalk = require("chalk");

const fs = require("fs");

const addFunc = require("./utils.js");
const noteFunc = require("./notes.js");

// fs.writeFileSync("notes.js", "Your notes...");

console.log(addFunc(3, 2));

console.log(noteFunc());

// console.log(validator.isEmail("ori.com"));
// console.log(validator.isURL("https://ori.com"));
// console.log(chalk.green("success!"));
