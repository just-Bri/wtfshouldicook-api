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
    return Promise.all(
      ins.map((item, i) => {
        // console.log("rec_id: " + id);
        // console.log("step: " + i);
        // console.log("inst: " + item.instructions);
        //   db("instructions")
        //     .insert({
        //       recipe_id: id,
        //       step_number: i,
        //       instructions: item.instructions
        //     })
        //     .returning("id");
        // });
        return db("instructions")
          .insert({
            recipe_id: id,
            step_number: i,
            instructions: item.instructions
          })
          .returning("id");
      })
    ).then(response => console.log(response));
  }
};

module.exports = RecipeService;
