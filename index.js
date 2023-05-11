const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGODB_URI);

const app = express();
app.use(express.json());
app.use(cors());

const marvelRoutes = require("./routes/marvel");
const userRoutes = require("./routes/user");
app.use(marvelRoutes);
app.use(userRoutes);

app.all("*", (req, res) => {
  res.status(400).json("Cette route n'est pas définie");
});

app.listen(process.env.PORT, (req, res) => {
  console.log("🚀 Démarrage du Serveur 🚀");
});
