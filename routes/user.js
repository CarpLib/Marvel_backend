const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { default: axios } = require("axios");

router.get("/", (req, res) => {
  try {
    res.status(200).json("Route Ok");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/characters", async (req, res) => {
  try {
    const response = await axios(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.API_KEY}`
    );
    // console.log(response.data.results);
    res.status(200).json(response.data.results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.get("/character/:id", async (req, res) => {
  try {
    // Récupétation de l'id du personnage
    const idCharacter = req.params.id;
    // console.log(idCharacter);
    const response = await axios(
      `https://lereacteur-marvel-api.herokuapp.com/character/${idCharacter}?apiKey=${process.env.API_KEY}`
    );
    // console.log(response.data);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.get("/comics", async (req, res) => {
  try {
    const response = await axios(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.API_KEY}`
    );
    // console.log(response.data.results);
    res.status(200).json(response.data.results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
