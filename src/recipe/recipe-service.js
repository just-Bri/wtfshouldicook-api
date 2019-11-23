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
      console.log("rec_id: " + id);
      console.log("step: " + i);
      console.log("inst: " + item.instructions);
      return db("instructions")
        .insert({
          recipe_id: parseInt(id, 10),
          step_number: i,
          instructions: item.instructions
        })
        .returning("id");
    });
  }
};

module.exports = RecipeService;
