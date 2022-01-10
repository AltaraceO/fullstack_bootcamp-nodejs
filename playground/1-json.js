const fs = require("fs");

const book = {
  title: `I'll be gone in the dark`,
  author: "Michelle McNamera",
};

//takes obj str or arr and returns a json
const bookJSON = JSON.stringify(book);

//TAKES JSON string and gives back the object
const parsedData = JSON.parse(bookJSON);

fs.writeFileSync("1-json.json", bookJSON);
//GETTIN INFO BACK
//1 Brings back data as binary
const dataBuffer = fs.readFileSync("1-json.json");
//2 Turns data to JSON string
const dataJSON = dataBuffer.toString();
//3 Creates an Object
const data = JSON.parse(dataJSON);
//4 Get key from object
console.log(data.title);
