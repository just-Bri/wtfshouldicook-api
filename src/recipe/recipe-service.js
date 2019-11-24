const RecipeService = {
  getAllRecipes(db) {
    return db.select("*").from("recipes");
  },
  getById(db, id) {
    return db("recipes").where({ id });
  },
  postRecipe(db, recipe) {
    // console.log(`inserting recipe ${recipe.name}`);
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
    // console.log(`inserting recipe ${id} instructions`);
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
    // console.log(`inserting ${ing}`);
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
    // console.log(`db: ${db}`);
    // console.log(`body: ${body}`);
    // console.log(`id: ${id}`);
    // console.log(`ing_id: ${ing_id}`);
    // console.log(`body.ing[0] vals: ${Object.values(body.ingredients[0])}`);
    return Promise.all(
      body.ingredients.map((ing, i) => {
        console.log(`ing.amount: ${ing.amount}`);
        console.log(`id[i]: ${id[i]}`);
        console.log(`ing_id[i]: ${ing_id[i]}`);
        return db("recipe_ingredients").insert({
          recipe_id: parseInt(id[i], 10),
          ingredient_id: parseInt(ing_id[i], 10),
          ingredient_amount: ing.amount
        });
      })
    );
    // return "from postRecIng";
  }
};

module.exports = RecipeService;
