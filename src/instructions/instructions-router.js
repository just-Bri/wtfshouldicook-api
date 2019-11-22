const express = require("express");
// const xss = require("xss");
const InstructionsService = require("./instructions-service");

const instructionsRouter = express.Router();
// const jsonParser = express.json();

instructionsRouter.route("/:recipe_id").get((req, res, next) => {
  const db = req.app.get("db");
  InstructionsService.getByRecipeId(db, req.params.recipe_id)
    .then(instructions => {
      console.log(instructions);
      res.json(instructions);
    })
    .catch(next);
});

module.exports = instructionsRouter;
