const express = require("express");
//npm i multer
const multer = require("multer");
const User = require("../models/user");
const auth = require("../middleware/auth");
const router = new express.Router();

router.post("/users", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    //lower case user on the specific instance of user.
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (e) {
    res.status(400).send(e.message);
  }
});

router.post("/users/login", async (req, res) => {
  try {
    //uppercase on the UPPERCASE User model
    //Find any user in that matches email and password
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (e) {
    res.status(400).send();
  }
});

router.post("/users/logout", auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();
    res.send();
  } catch (e) {
    res.status(500).send();
  }
});

router.post("/users/logoutAll", auth, async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.send();
  } catch (e) {
    res.status(500).send();
  }
});

//second argument here is a authorization method imported from middleware. this will run before the code does.
router.get("/users/me", auth, async (req, res) => {
  res.send(req.user);
});

//*Should not be able to get users by their IDs without authentication.
// router.get("/users/:id", async (req, res) => {
//   const _id = req.params.id;

//   try {
//     const user = await User.findById(_id);
//     if (!user) {
//       return res.status(400).send();
//     }
//     res.send(user);
//   } catch (e) {
//     res.status(500).send(e.message);
//   }
// });

router.patch("/users/me", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdate = ["name", "email", "password", "age"];
  const isValidOperation = updates.every((update) => {
    return allowedUpdate.includes(update);
  });

  if (!isValidOperation) {
    res.status(400).send({ error: "invalid updates" });
  }

  try {
    // const user = await User.findById(req.params.id);

    updates.forEach((update) => {
      req.user[update] = req.body[update];
    });
    await req.user.save();

    // if (!user) {
    //   return res.status(404).send();
    // }

    res.send(req.user);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

router.delete("/users/me", auth, async (req, res) => {
  try {
    //* auth is sending us an authenticated user ... no need for all thats below.
    // const user = await User.findByIdAndDelete(req.user._id);
    // if (!user) {
    //   res.status(404).send();
    // }
    //* .remove is provided with mongoose
    await req.user.remove();
    res.status(200).send(req.user);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

//middleware for uploading files MULTER
const upload = multer({
  //destination folder
  // dest: "avatar",
  limits: {
    //restrict to 1megaByte
    fileSize: 1000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error("file must be an image"));
    }
    cb(undefined, true);
  },
});

router.post(
  "/users/me/avatar",
  auth,
  upload.single("avatar"),
  async (req, res) => {
    req.user.avatar = req.file.buffer;
    await req.user.save();
    res.send();
  },
  //another function at the end that accepts errors from middleware for instance and that needs the params exactly as they are
  (e, req, res, next) => {
    res.status(400).send({ error: e.message });
  }
);

//delete avatar
router.delete("/users/me/avatar", auth, async (req, res) => {
  req.user.avatar = undefined;
  await req.user.save();
  res.send();
});

router.get("/users/:id/avatar", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user || !user.avatar) {
      throw new Error();
    }
    //line below gets the image binary and turn it to an actual image ... the html version of this will be
    //<img src="http://localhost:3000/users/:id/avatar">
    res.set("Content-Type", "image/jpg");
    res.send(user.avatar);
  } catch (e) {
    res.status(400).send();
  }
});

module.exports = router;
