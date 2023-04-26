const express = require("express");
const {
  allRecipes,
  getRecipe,
  createRecipe,
  deleteRecipe,
  updateRecipe,
} = require("../controllers/recipeController");
const router = express.Router();

// GET all recipes
router.get("/", allRecipes);

// Get single recipe
router.get("/:id", getRecipe);

// POST a new recipe
router.post("/", createRecipe);

router.delete("/:id", deleteRecipe);

router.patch("/:id", updateRecipe);

module.exports = router;
