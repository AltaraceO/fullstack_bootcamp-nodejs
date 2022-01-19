const express = require("express");
const productRouter = require("./routers/product");
require("./mongooseProduct");

const app = express();
app.use(express.json());
app.use(productRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
