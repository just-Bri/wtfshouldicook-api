const RecipeService = {
  getAllRecipes(db) {
    return db.select("*").from("recipes");
  },
  getById(db, id) {
    return db("recipes").where({ id });
  },
  postRecipe(db, recipe) {
    return db("recipes")
      .insert({
        name: recipe.name,
        prep_time: recipe.prep_time,
        cook_time: recipe.cook_time,
        cuisine: recipe.cuisine,
        complexity: recipe.complexity
      })
      .returning("id");
  },
  postRecipeInstructions(db, ins, id) {
    console.log("ins: " + ins);
    console.log("id: " + id);
    let blah = [];
    Object.entries(ins).forEach(item => blah.push(item));
    console.log(id + " line 24 " + Object.values(blah));
    // return db("instructions").insert({}).returning("*")
  }
};

module.exports = RecipeService;
