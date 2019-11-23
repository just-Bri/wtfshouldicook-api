const express = require("express");
const xss = require("xss");
const RecipeService = require("./recipe-service");

const recipeRouter = express.Router();
const jsonParser = express.json();

const serializeRecipe = recipe => ({
  name: xss(recipe.name),
  prep_time: xss(recipe.prep_time),
  cook_time: xss(recipe.cook_time),
  cuisine: xss(recipe.cuisine),
  complexity: xss(recipe.complexity)
});

recipeRouter
  .route("/")
  .get((req, res, next) => {
    res.status(200).send("testing /api/recipe GET");
  })
  .post((req, res, next) => {
    const db = req.app.get("db");
    return RecipeService.postRecipe(db, req.body).then(() => res.status(201));
  });

recipeRouter.route("/:id").get((req, res, next) => {
  const db = req.app.get("db");
  RecipeService.getById(db, req.params.id)
    .then(recipe => {
      res.json(recipe);
    })
    .catch(next);
});

module.exports = recipeRouter;
