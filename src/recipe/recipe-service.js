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
    // let jsonRecipe = JSON.stringify(recipe);
    // console.log("from service recipe: " + jsonRecipe);
    return db("recipes").insert({
      recipe
    });
  }
};

module.exports = RecipeService;
