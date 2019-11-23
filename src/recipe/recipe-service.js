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
    let jsonRecipe = JSON.stringify(recipe);
    console.log("from service recipe: " + jsonRecipe);
    // return db.insert(recipe).into("recipes");
    return db("recipes").insert({
      name: jsonRecipe.name,
      // picture_url: jsonRecipe.picture_url,
      prep_time: jsonRecipe.prep_time,
      cook_time: jsonRecipe.cook_time,
      cuisine: jsonRecipe.cuisine,
      complexity: jsonRecipe.complexity
    });
  }
};

module.exports = RecipeService;
