const RecipeService = {
  getAllRecipes(knex) {
    return knex.select("*").from("recipes");
  },
  getById(knex, id) {
    return knex("recipes").where({ id });
  }
};

module.exports = RecipeService;
