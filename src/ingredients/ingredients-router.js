const express = require("express");
// const xss = require("xss");
const IngredientService = require("./ingredients-service");

const ingredientRouter = express.Router();
// const jsonParser = express.json();

ingredientRouter.route("/:recipe_id").get((req, res, next) => {
  const knexInstance = req.app.get("db");
  IngredientService.getByRecipeId(knexInstance, req.params.recipe_id)
    .then(ingredient => {
      res.json(ingredient);
    })
    .catch(next);
});

module.exports = ingredientRouter;