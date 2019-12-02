const express = require("express");
// const xss = require("xss");
const IngredientService = require("./ingredients-service");

const ingredientRouter = express.Router();
// const jsonParser = express.json();

ingredientRouter.route("/:recipe_id").get((req, res, next) => {
  const db = req.app.get("db");
  IngredientService.getByRecipeId(db, req.params.recipe_id)
    .then(ingredients => {
      res.json(ingredients);
    })
    .catch(response =>
      res.status(404).json({ error: "Please supply a recipe id" })
    );
});

module.exports = ingredientRouter;
