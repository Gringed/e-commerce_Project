const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken');

//Register
router.post("/register", async (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const newUser = new User({
    username: username,
    email: email,
    password: CryptoJS.AES.encrypt(
      password,
      process.env.PASSWORD_SECRET
    ).toString(),
  });
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Login
router.post("/login", async (req, res) => {
  const email = req.body.email;

  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(401).json("Utilisateur inconnu");
    }

    const hashed = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASSWORD_SECRET
    );
    const passwordDecrypt = hashed.toString(CryptoJS.enc.Utf8);

    const accessToken = jwt.sign({
        id:user._id,
        isAdmin: user.isAdmin
    }, process.env.JWT_SECRET, {
        expiresIn: "3d"
    })

    const { password, ...others } = user._doc;
    passwordDecrypt !== req.body.password
      ? res.status(401).json("Mot de passe incorrect")
      : res.status(200).json({...others, accessToken});
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
