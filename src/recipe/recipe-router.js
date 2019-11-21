const express = require("express");
const xss = require("xss");
const RecipeService = require("./recipe-service");

const recipeRouter = express.Router();
const jsonParser = express.json();

// const serializeRecipe = recipe => ({
//   id: recipe.id,
//   name: xss(recipe.name),
//   prep_time = recipe.prep_time,
//   cook_time = recipe.cook_time,
//   picture_url = recipe.picture_url
// })

recipeRouter.route("/:id").get((req, res, next) => {
  const knexInstance = req.app.get("db");
  RecipeService.getById(knexInstance, req.params.id)
    .then(recipe => {
      res.json(recipe);
    })
    .catch(next);
});

module.exports = recipeRouter;
