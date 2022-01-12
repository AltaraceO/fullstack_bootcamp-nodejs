const express = require("express");
const app = express();

app.use(express.json());

const PORT = 3000;
const ARR = [1, 2, 3, 4, 5, 6];

app.listen(PORT, () => {
  console.log("up and running");
});

app.get("", (req, res) => {
  res.send(ARR);
});

app.post("/numbers", (req, res) => {
  ARR.includes(req.body.index)
    ? console.log("Number already exists")
    : ARR.push(req.body.index);
  res.send(ARR);
});

app.delete("/numbers", (req, res) => {
  const num = ARR.indexOf(req.body.number);
  ARR.splice(num, 1);
  res.send(ARR);
});

app.put("/numbers/:id", (req, res) => {
  const num = ARR.indexOf(Number(req.params.id));
  ARR.splice(num, 1, req.body.index);
  res.send(ARR);
});
