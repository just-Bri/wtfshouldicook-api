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
    let recipe = JSON.stringify(recipe);
    console.log("from service recipe: " + recipe);
    // return db.insert(recipe).into("recipes");
    return db("recipes)").insert({
      name: recipe.name,
      // picture_url: recipe.picture_url,
      prep_time: recipe.prep_time,
      cook_time: recipe.cook_time,
      cuisine: recipe.cuisine,
      complexity: recipe.complexity
    });
  }
};

module.exports = RecipeService;
