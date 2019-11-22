const express = require("express");
const xss = require("xss");
const RecipeService = require("./recipe-service");

const recipeRouter = express.Router();
const jsonParser = express.json();

const serializeRecipe = recipe => ({
  name: xss(recipe.name),
  prep_time: xss(recipe.prep_time),
  cook_time: xss(recipe.cook_time),
  picture_url: xss(recipe.picture_url),
  cuisine: xss(recipe.cuisine)
});

recipeRouter
  .route("/")
  .get((req, res, next) => {
    res.status(200).send("testing");
  })
  .post((req, res, next) => {
    res.status(200).send(req.body);
    // const db = req.app.get("db");
    // console.log("post recieved, req.body = " + req.body);
    // const {
    //   name = recipeDetails[0].name,
    //   prep_time = recipeDetails[0].prep_time,
    //   cook_time = recipeDetails[0].cook_time,
    //   picture_url = recipeDetails[0].picture_url,
    //   cuisine = recipeDetails[0].cuisine,
    //   complexity = recipeDetails[0].complexity,
    //   ingredients = recipeIngredients.forEach(item => {
    //     return { name: item.name, amount: item.amount };
    //   }),
    //   instructions = recipeInstructions.forEach(item => {
    //     return {
    //       step_number: item.step_number,
    //       instructions: item.instructions
    //     };
    //   })
    // } = req.body;
    // const newRec = {
    //   name,
    //   prep_time,
    //   cook_time,
    //   cuisine,
    //   complexity,
    //   picture_url,
    //   ingredients,
    //   instructions
    // };

    // RecipeService.postRecipe(db, newRec)
    //   .then(() => {
    //     res
    //       .status(201)
    //       .location("/")
    //       .json(serializeRecipe(newRec));
    //   })
    //   .catch(next);
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
