const InstructionService = {
  getAllInstructions(db) {
    return db.select("*").from("instructions");
  },
  getByRecipeId(db, recipe_id) {
    return db("recipe_ingredients")
      .join(
        "instructions",
        "recipe_ingredients.instruction_id",
        "instructions.id"
      )
      .select("ingredient_id AS i_id", "step_number", "instructions")
      .where({ recipe_id });
  }
};

module.exports = InstructionService;
