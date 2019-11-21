const IngredientService = {
  getAllIngredients(knex) {
    return knex.select("*").from("ingredients");
  },
  getByRecipeId(knex, recipe_id) {
    return knex
      .select("ingredient_amount")
      .from("recipe_ingredients")
      .where({ recipe_id })
      .innerJoin(
        "ingredients",
        () => {
          this.on("ingredients.id", "=", "recipe_ingredients.ingredient_id");
        }
        // "recipe_ingredients.ingredient_id",
        // "=",
        // "ingredients.id"
      );
    knex("users").innerJoin("accounts", function() {
      this.on("accounts.id", "=", "users.account_id").orOn(
        "accounts.owner_id",
        "=",
        "users.id"
      );
    });
    // join select ing_name from ingredients where id ing.ingredient_id
  }
};

module.exports = IngredientService;
