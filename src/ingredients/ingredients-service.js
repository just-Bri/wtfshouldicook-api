const IngredientService = {
  getAllIngredients(knex) {
    return knex.select("*").from("ingredients");
  },
  getByRecipeId(knex, recipe_id) {
    return knex
      .from("recipe_ingredients AS ring")
      .select("ring.amount", "ing.amount")
      .where("ring.recipe_id", "=", recipe_id)
      .join("ingredients AS ing", "ing.id", "ring.ingredient_id");
    // join select ing_name from ingredients where id ing.ingredient_id
  }
};

module.exports = IngredientService;
