const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const recipeSchema = new Schema(
  {
    name: { type: String, required: true },
    author: { type: String, required: true },
    ingredients: { type: Object, required: true },
    steps: { type: Array, required: true },
    cuisine: { type: String, required: true },
    allergies: { type: Array, required: true },
  },
  { timestamps: true }
);

const Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = Recipe;
