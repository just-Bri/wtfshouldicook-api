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
    // ins = recipe instructions array
    // id = recipe_id coming from postRecipe return
    return ins.forEach((item, i) => {
      // console.log("rec_id: " + id);
      // console.log("step: " + i);
      // console.log("inst: " + item.instructions);
      db("instructions")
        .insert({
          recipe_id: 1,
          step_number: 50,
          instructions: "test"
        })
        .returning("id");
    });
  }
};

module.exports = RecipeService;
