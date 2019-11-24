const RecipeService = {
  getAllRecipes(db) {
    return db.select("*").from("recipes");
  },
  getById(db, id) {
    return db("recipes").where({ id });
  },
  postRecipe(db, recipe) {
    console.log(`inserting recipe ${recipe.name}`);
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
    console.log(`inserting recipe ${id} instructions`);
    return Promise.all(
      ins.map((item, i) => {
        return db("instructions")
          .insert({
            recipe_id: parseInt(id, 10),
            step_number: parseInt(i, 10),
            instructions: item.instructions
          })
          .returning("recipe_id");
      })
    ).then(response => {
      return response;
    });
  },
  postRecipeIngredients(db, ing) {
    return Promise.all(
      ing.map(item => {
        return db("ingredients").insert({
          name: item.name
        });
      })
    ).then(() => {
      console.log("ings inserted");
    });
  }
};

module.exports = RecipeService;
