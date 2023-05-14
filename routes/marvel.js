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
  const name = req.query.name || "";
  const skip = req.query.skip || "0";
  const limit = req.query.limit || "100";
  console.log(name);
  try {
    const response = await axios(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.API_KEY}&name=${name}&skip=${skip}&limit=${limit}`
    );
    // console.log(response.data.results);
    res.status(200).json(response.data);
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
  const title = req.query.title || "";
  const skip = req.query.skip || "0";

  // console.log(title);

  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.API_KEY}&title=${title}&skip=${skip}`
    );
    // console.log(response.data);
    // Tri alphabétique sur le champ 'title'
    // Tri alphabétique sur le champ 'title' de 'results'
    response.data.results.sort((a, b) => a.title.localeCompare(b.title));
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/comics/:characterid", async (req, res) => {
  try {
    const idCharacter = req.params.characterid;
    // console.log(idCharacter);
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/${idCharacter}?apiKey=${process.env.API_KEY}`
    );
    console.log(response.data);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/comic/:comicId", async (req, res) => {
  try {
    const idComic = req.params.comicId;
    // console.log(idComic);
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comic/${idComic}?apiKey=${process.env.API_KEY}`
    );
    // console.log(response.data);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
