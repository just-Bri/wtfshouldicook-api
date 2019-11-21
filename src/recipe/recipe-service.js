const RecipeService = {
  getAllRecipes(knex) {
    return knex.select("*").from("recipes");
  }
};

module.exports = RecipeService;
