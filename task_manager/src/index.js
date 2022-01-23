const express = require("express");
require("./db/mongoose");
const taskRouter = require("./routers/task");
const userRouter = require("./routers/user");

const app = express();
const port = process.env.PORT || 3000;

//Middleware  has to be above other app.use calls

app.use((req, res, next) => {
  console.log(req.method, req.path);
  //have to call NEXT so that call continues running and doesn't get stuck here
  // if(req.method ==="GET"){
  //   res.send('')
  // }
  next();
});

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log(`Server*test* is up on ${port}`);
});
