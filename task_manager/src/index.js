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
//npm i multer
const multer = require("multer");
const upload = multer({
  dest: "images",
});

//upload.single is a middleware!! in the middle... doing stuff
//value in single("upload") has to match up exactly to the value of the key-value in Postman
app.post("/uploads", upload.single("upload"), (req, res) => {
  res.send();
});

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log(`Server is serving on port ${port}`);
});

// const Task = require("./models/tasks");
// const User = require("./models/user");

// const main = async () => {
//   const user = await User.findById("61ee8e4715badde1a0b12e3d");
//   await user.populate("tasks");
//   console.log(user.tasks);
// };
// main();
