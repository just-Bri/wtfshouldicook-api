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

recipeRouter.route("/").get((req, res, next) => {
  const knexInstance = req.app.get("db");
  RecipeService.getAllRecipes(knexInstance)
    .then(recipes => {
      res.json(recipes);
    })
    .catch(next);
});
recipeRouter.route("/:id").get((req, res, next) => {
  const knexInstance = req.app.get("db");
  RecipeService.getId(knexInstance, id)
    .then(recipe => {
      res.json(recipe);
    })
    .catch(next);
});
