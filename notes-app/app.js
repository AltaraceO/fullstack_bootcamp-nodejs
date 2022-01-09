const fs = require("fs");

// fs.writeFileSync("notes.txt", "my name is Ori");
fs.appendFileSync("notes.txt", "-- and I am from here");
