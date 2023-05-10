const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const userRoutes = require("./routes/user");
app.use(userRoutes);

app.all("*", (req, res) => {
  res.status(400).json("Cette route n'est pas définie");
});

app.listen(process.env.PORT, (req, res) => {
  console.log("🚀 Démarrage du Serveur 🚀");
});
