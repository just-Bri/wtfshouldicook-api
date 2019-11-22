const RecipeService = {
  getAllRecipes(db) {
    return db.select("*").from("recipes");
  },
  getById(db, id) {
    return db("recipes").where({ id });
  },
  // getAllById(db, id) {
  //   return db();
  // },
  postRecipe(db, recipe) {
    return console.log("from service recipe: " + recipe);
    // return db.insert(recipe).into("recipes");
  }
};

module.exports = RecipeService;
