const Recipe = require("../models/recipeModel");
const mongoose = require("mongoose");

// get all
const allRecipes = async (req, res) => {
  const recipes = await Recipe.find({}).sort({ createdAt: -1 });

  res.status(200).json(recipes);
};

// get one
const getRecipe = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ error: "Recipe does not exist, check your Recipe ID" });
  }

  const recipe = await Recipe.findById(id);
  if (!recipe) {
    return res.status(404).json({ error: "Recipe does not exist" });
  }

  res.status(200).json(recipe);
};

// get create page

// POST a new recipe
const createRecipe = async (req, res) => {
  const { name, author, ingredients, steps, cuisine, allergies } = req.body;

  // add doc to db
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
};

// delete a recipe

const deleteRecipe = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ error: "Cannot delete recipe, recipe does not exist" });
  }

  const recipe = await Recipe.findOneAndDelete({ _id: id });
  if (!recipe) {
    return res
      .status(404)
      .json({ error: "Cannot delete recipe, recipe does not exist" });
  }
  // redirect
  res.status(200).json(recipe);
};

// update a  recipe

const updateRecipe = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ error: "Cannot update recipe, recipe does not exist" });
  }

  const recipe = await Recipe.findOneAndUpdate({ _id: id }, { ...req.body });
  if (!recipe) {
    return res
      .status(404)
      .json({ error: "Cannot update recipe, recipe does not exist" });
  }
  res.status(200).json(recipe);
};

module.exports = {
  allRecipes,
  getRecipe,
  createRecipe,
  deleteRecipe,
  updateRecipe,
};
