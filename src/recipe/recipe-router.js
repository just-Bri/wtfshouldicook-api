const express = require("express");
const xss = require("xss");
const RecipeService = require("./recipe-service");

const recipeRouter = express.Router();
const jsonParser = express.json();

// const serializeRecipe = recipe => ({
//   name: xss(recipe.name),
//   prep_time: xss(recipe.prep_time),
//   cook_time: xss(recipe.cook_time),
//   cuisine: xss(recipe.cuisine),
//   complex: xss(recipe.complex)
// });

let submittedId;
recipeRouter.route("/").get((req, res, next) => {
  const db = req.app.get("db");
  RecipeService.getByAnswers(db, req.query)
    .then(response => res.status(201).json({ newId: response }))
    .catch(next);
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
    .catch(next);
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
