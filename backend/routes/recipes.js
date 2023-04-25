const express = require("express");

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
router.post("/", (req, res) => {
  res.json({ mssg: "form for a new here recipe" });
});

router.delete("/:id", (req, res) => {
  res.json({ mssg: "action to delete a recipe" });
});

router.patch("/:id", (req, res) => {
  res.json({ mssg: "form for updating a recipe" });
});

module.exports = router;
