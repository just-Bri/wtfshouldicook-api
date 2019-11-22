const InstructionService = {
  getAllInstructions(db) {
    return db.select("*").from("instructions");
  },
  getByRecipeId(db, recipe_id) {
    return db("instructions")
      .select("step_number", "instructions")
      .where({ recipe_id });
  }
};

module.exports = InstructionService;
