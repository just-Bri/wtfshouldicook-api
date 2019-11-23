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
    return db("recipes")
      .insert({
        name: recipe.name,
        prep_time: recipe.prep_time,
        cook_time: recipe.cook_time,
        cuisine: recipe.cuisine,
        complexity: recipe.complexity
      })
      .then(
        db("instructions").insert(
          recipe.instructions.forEach((item, i) => {
            return { step_number: i, instructions: item.step };
          })
        )
      );
  }
};

module.exports = RecipeService;
