const express = require("express");
const Recipe = require("../models/recipeModel");
const router = express.Router();

// GET all recipes
router.get("/", (req, res) => {
  res.json({ mssg: "get all recipes" });
});

// Get single recipe
router.get("/:id", (req, res) => {
  res.json({ mssg: "this is a singular recipe" });
});

// POST a new recipe
router.post("/", async (req, res) => {
  // res.json({ mssg: "form for a new here recipe" });
  const { name, author, ingredients, steps, cuisine, allergies } = req.body;

  try {
    const recipe = await Recipe.create({
      name,
      author,
      ingredients,
      steps,
      cuisine,
      allergies,
    });
    res.status(200).json(recipe);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", (req, res) => {
  res.json({ mssg: "action to delete a recipe" });
});

router.patch("/:id", (req, res) => {
  res.json({ mssg: "form for updating a recipe" });
});

module.exports = router;
