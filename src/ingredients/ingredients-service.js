const IngredientService = {
  getAllIngredients(knex) {
    return knex.select("*").from("ingredients");
  },
  getRecipeId(knex, recipe_id) {
    return knex("recipe_ingredients").where({ recipe_id });
  }
};

module.exports = IngredientService;
