const RecipeService = {
  getAllRecipes(db) {
    return db.select("*").from("recipes");
  },
  getById(db, id) {
    return db("recipes").where({ id });
  },
  getAllById(db, id) {
    return db();
  }
};

module.exports = RecipeService;
