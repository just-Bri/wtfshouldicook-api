const RecipeService = {
  getAllRecipes(db) {
    return db.select("*").from("recipes");
  },
  getById(db, id) {
    return db("recipes").where({ id });
  },
  postRecipe(db, recipe) {
    // console.log(recipe);
    return (
      db("recipes")
        .insert({
          name: recipe.name,
          prep_time: recipe.prep_time,
          cook_time: recipe.cook_time,
          cuisine: recipe.cuisine,
          complexity: recipe.complexity
        })
        .returning("id")
        // .then(console.log)
        .then(response => {
          return recipe.instructions.forEach((item, i) => {
            return {
              recipe_id: response,
              step_number: i,
              instructions: item.step
            };
          });
        })
        .then(
          console.log().then(db("instructions").insert({ resp }))
          // return ;
        )
    );
  }
};

module.exports = RecipeService;
