const jwt = require("jsonwebtoken");
const User = require("../models/user");

const auth = async (req, res, next) => {
  try {
    // console.log(req.header);
    const token = req.header("Authorization").replace("Bearer ", "");
    //replace this with ...
    //const token = req.cookie['auth_token']
    console.log(token);
    //move uniqueSentence to the .env folder
    const decoded = jwt.verify(token, "uniqueSentence");
    console.log(decoded);
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });

    if (!user) {
      throw new Error();
    }
    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    res.status(400).send({ error: "please authenticate" });
  }
};

module.exports = auth;
