const IngredientService = {
  getAllIngredients(knex) {
    return knex.select("*").from("ingredients");
  },
  getByRecipeId(knex, recipe_id) {
    return knex
      .select("ring.amount", "ing.amount")
      .from("recipe_ingredients AS ring")
      .innerJoin("ingredients AS ing", "ing.id", "ring.ingredient_id")
      .where("ring.recipe_id", "=", recipe_id)
      .returing("*");
    // join select ing_name from ingredients where id ing.ingredient_id
  }
};

module.exports = IngredientService;
