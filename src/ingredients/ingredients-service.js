const IngredientService = {
  getAllIngredients(knex) {
    return knex.select("*").from("ingredients");
  },
  getByRecipeId(knex, recipe_id) {
    return knex
      .select("*")
      .from("recipe_ingredients")
      .where({ recipe_id });
  }
};

module.exports = IngredientService;
