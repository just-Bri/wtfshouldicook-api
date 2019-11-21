const IngredientService = {
  getAllIngredients(knex) {
    return knex.select("*").from("ingredients");
  },
  getByRecipeId(knex, recipe_id) {
    return knex
      .from("recipe_ingredients")
      .select("recipe_ingredients.amount", "ing.amount")
      .where("recipe_ingredients.recipe_id", "=", recipe_id)
      .join("ingredients", {
        "recipe_ingredients.ingredient_id": "ingredients.id"
      });
    // join select ing_name from ingredients where id ing.ingredient_id
  }
};

module.exports = IngredientService;
