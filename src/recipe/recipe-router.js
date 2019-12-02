const express = require("express");
const xss = require("xss");
const RecipeService = require("./recipe-service");

const recipeRouter = express.Router();
const jsonParser = express.json();

let submittedId;
recipeRouter.route("/").get((req, res, next) => {
  const db = req.app.get("db");
  RecipeService.getByAnswers(db, req.query)
    .then(response => res.status(201).json({ newId: response[0].id }))
    .catch(() => res.status(404).json({ error: "Please supply a query" }));
});

recipeRouter.route("/").post((req, res, next) => {
  const db = req.app.get("db");
  RecipeService.postRecipe(db, req.body)
    .then(id => {
      submittedId = id;
      RecipeService.postRecipeInstructions(db, req.body.instructions, id).then(
        id => {
          return Promise.all([
            RecipeService.postIngredients(db, req.body.ingredients).then(
              ing_id => {
                RecipeService.postRecipeIngredients(db, req.body, id, ing_id);
              }
            )
          ]);
        }
      );
    })
    .then(() =>
      res.json({ success: true, redirectTo: `/recipes/${submittedId}` })
    )
    .catch(() => res.status(404).json({ error: "Please supply a recipe" }));
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
