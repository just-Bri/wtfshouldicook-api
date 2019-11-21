const RecipeService = {
  getAllRecipes(knex) {
    return knex.select("*").from("recipes");
  },
  getId(knex, id) {
    return knex
      .select("*")
      .from("recipes")
      .where({ id });
  }
};

module.exports = RecipeService;
