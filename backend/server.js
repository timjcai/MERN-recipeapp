const express = require("express");
require("dotenv").config();
const recipeRoutes = require("./routes/recipes");

// express app
const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use(recipeRoutes);

// listen for requests
app.listen(process.env.PORT, () => {
  console.log("listening on port 3000", process.env.PORT);
});

process.env;
