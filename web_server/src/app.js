const path = require("path");
const express = require("express");

//! how to get a route to the index.html
// console.log(__dirname);
// console.log(path.join(__dirname, "../public"));

const publicDir = path.join(__dirname, "../public");

const app = express();

app.use(express.static(publicDir));

//!Below is rudundant because of above
// app.get("", (req, res) => {
//   res.send(" <h1> WELCOME TO MY PAGE!!!</h1> ");
// });

app.get("/help", (req, res) => {
  res.send([
    {
      name: "Ori",
      pet: "Biscuit",
    },
    {
      name: "Liad",
      pet: "Biscuit",
    },
  ]);
});

app.get("/about", (req, res) => {
  res.send(
    "  <p>  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore sapientem labore, quasi fuga ullam quam autem iusto quis odit. Adipisci cumque ducimus dolore et eum aliquam consequuntur quis, veritatis earum. </p> "
  );
});

app.get("/weather", (req, res) => {
  res.send({
    what: `the weather that's waht!`,
    where: "here, where else?",
    who: "you!",
  });
});

//app.com <-- get expl. above is root
//app.com/help
//app.com/about

app.listen(3000, () => {
  console.log("server is up on port 3000");
});
