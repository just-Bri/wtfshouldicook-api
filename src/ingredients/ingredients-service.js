const IngredientService = {
  getAllIngredients(knex) {
    return knex.select("*").from("ingredients");
  },
  getByRecipeId(knex, recipe_id) {
    return knex
      .select("ingredient_amount")
      .from("recipe_ingredients")
      .where({ recipe_id })
      .join(
        "ingredients.name",
        "ingredients.id",
        "=",
        "recipe_ingredients.ingredient_id"
      );
    // join select ing_name from ingredients where id ing.ingredient_id
  }
};

module.exports = IngredientService;
