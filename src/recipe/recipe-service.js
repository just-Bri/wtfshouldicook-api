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
      prep_time: parseInt(jsonRecipe.prep_time, 10),
      cook_time: parseInt(jsonRecipe.cook_time, 10),
      cuisine: jsonRecipe.cuisine,
      complexity: parseInt(jsonRecipe.complexity, 10)
    });
  }
};

module.exports = RecipeService;
