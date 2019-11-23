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
    console.log("ins: " + Object.entries(ins[0]));
    console.log("id: " + id);
    // let instrucs = Object.entries(ins);
    let blah = [];
    Object.entries(ins).forEach(item => blah.push(item));
    console.log("blah: " + blah);
  }
};

module.exports = RecipeService;
