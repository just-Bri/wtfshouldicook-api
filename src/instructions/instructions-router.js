const express = require("express");
// const xss = require("xss");
const InstructionService = require("./instructions-service");

const instructionRouter = express.Router();
// const jsonParser = express.json();

instructionRouter.route("/:recipe_id").get((req, res, next) => {
  const db = req.app.get("db");
  InstructionService.getByRecipeId(db, req.params.recipe_id)
    .then(instructions => {
      // console.log(instructions);
      res.json(instructions);
    })
    .catch(next);
});

module.exports = instructionRouter;
