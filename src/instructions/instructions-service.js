const InstructionService = {
  getAllInstructions(db) {
    return db.select("*").from("instructions");
  },
  getByRecipeId(db, recipe_id) {
    return db("instructions")
      .select("*")
      .where({ recipe_id });
  }
};

module.exports = InstructionService;

// getByRecipeId(db, recipe_id) {
//   return db("recipe_ingredients")
//     .join("ingredients", "recipe_ingredients.ingredient_id", "ingredients.id")
//     .select("ingredient_amount AS amount", "name")
//     .where({ recipe_id });
// }
