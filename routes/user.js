const express = require("express");
const router = express.Router();
const uid2 = require("uid2");
const SHA256 = require("crypto-js/sha256");
const User = require("../models/User");
const { default: axios } = require("axios");

router.post("/signin", async (req, res) => {
  try {
    const { email, username, password } = req.body;

    const user = await User.findOne({ email }).populate("account");
    if (!username || !email || !password) {
      return res.status(400).json("Veuillez remplir tous les champs");
    }
    if (user !== null) {
      return res.status(409).json("Cette adresse mail a déjà été utilisé");
    }

    const salt = uid2(16);
    const hash = SHA256(salt + password).toString(encBase64);
    const token = uid2(64);

    const newUser = new User({
      email,
      account: {
        username,
      },
      token,
      hash,
      salt,
    });

    await newUser.save();

    res.status(200).json({ _id: newUser._id, token, account: newUser.account });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
