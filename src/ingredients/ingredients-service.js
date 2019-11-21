const IngredientService = {
  getAllIngredients(knex) {
    return knex.select("*").from("ingredients");
  },
  getRecipeId(knex, recipe_id) {
    return knex("ingredients").where({ recipe_id });
  }
};

module.exports = IngredientService;
