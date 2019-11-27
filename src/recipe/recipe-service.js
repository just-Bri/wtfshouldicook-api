const RecipeService = {
  getAllRecipes(db) {
    return db.select("*").from("recipes");
  },
  getById(db, id) {
    return db("recipes").where({ id });
  },

  getByAnswers(db, answers) {
    let query = db("recipes")
      .select("id")
      .orderByRaw("RANDOM()")
      .where({ complex: answers.complex })
      .limit(1);
    return (answers.cuisine
      ? query.andWhere({ cuisine: answers.cuisine })
      : query
    ).then(response => response);
  },
  postRecipe(db, recipe) {
    return db("recipes")
      .insert({
        name: recipe.name,
        prep_time: recipe.prep_time,
        cook_time: recipe.cook_time,
        cuisine: recipe.cuisine,
        complex: recipe.complex
      })
      .returning("id");
  },
  postRecipeInstructions(db, ins, id) {
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
    ).then(response => response);
  },
  postIngredients(db, ing) {
    return Promise.all(
      ing.map(item => {
        return db("ingredients")
          .insert({
            name: item.name
          })
          .returning("id");
      })
    ).then(response => response);
  },
  postRecipeIngredients(db, body, id, ing_id) {
    // problem here, ing only has 2 ingredients?
    // console.log(body);
    return Promise.all(
      body.ingredients.map((ing, i) => {
        // console.log(`id[0]: ${id}`);
        // console.log(`ing.amount: ${ing.amount}`);
        // console.log(`ing_id[i]: ${ing_id[i]}`);
        return db("recipe_ingredients").insert({
          recipe_id: parseInt(id[0]),
          ingredient_id: parseInt(ing_id[i]),
          ingredient_amount: ing.amount
        });
      })
    );
  }
};

module.exports = RecipeService;
