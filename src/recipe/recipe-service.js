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
    console.log(ins[0].instructions);
    return ins.forEach((item, i) => {
      console.log("i: " + i);
      db("instructions")
        .insert({
          recipe_id: id,
          step_number: i,
          instructions: item.instructions
        })
        .returning("*");
    });
  }
};

module.exports = RecipeService;
