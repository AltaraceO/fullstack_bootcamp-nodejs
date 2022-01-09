const fs = require("fs");

// fs.writeFileSync("notes.txt", "my name is Ori");
fs.appendFileSync("notes.txt", "-- and I am from here");
fs.writeFileSync("more_notes.txt", "more text");
fs.copyFileSync("more_notes.txt", "extra.txt");
fs.renameSync("extra.txt", "new_extra.txt");

fs.readdirSync("../notes-app").forEach((file) => console.log(file));
