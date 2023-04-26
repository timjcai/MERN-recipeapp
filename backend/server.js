const express = require("express");
require("dotenv").config();
const recipeRoutes = require("./routes/recipeRoutes");
const mongoose = require("mongoose");

// express app
const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    app.listen(process.env.PORT, () => {
      console.log("listening on port", process.env.PORT);
    });
  })
  .catch((err) => console.log(err));

// routes
app.use(recipeRoutes);

// listen for requests

process.env;
