const express = require("express");
// const xss = require("xss");
const IngredientService = require("./ingredients-service");

const ingredientRouter = express.Router();
// const jsonParser = express.json();

ingredientRouter.route("/:recipe_id").get((req, res, next) => {
  const db = req.app.get("db");
  console.log(`recipe_id in router: ${req.params.recipe_id}`);
  IngredientService.getByRecipeId(db, req.params.recipe_id)
    .then(ingredient => {
      console.log(`ingredient in router.getByRecId: ${ingredient}`);
      res.json(ingredient);
    })
    .catch(next);
});

module.exports = ingredientRouter;
