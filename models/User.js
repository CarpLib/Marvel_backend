const mongoose = require("mongoose");

const User = mongoose.model("User", {
  email: String,
  account: {
    username: String,
  },
  token: String,
  hash: String,
  salt: String,
  favorites: Array,
});

module.exports = User;
