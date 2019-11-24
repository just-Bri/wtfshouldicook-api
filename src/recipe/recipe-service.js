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
    console.log(`db: ${db}`);
    console.log(`body: ${body}`);
    console.log(`id: ${id}`);
    console.log(`ing_id: ${ing_id}`);
    // console.log(`body.ing[0] vals: ${Object.values(body.ingredients[0])}`);
    return Promise.all(
      body.ingredients.map(i => {
        console.log(`i -> ing_id: ${i}`);
        console.log(`find amnt ${body.ingredients[i].amount}`);
        // return db("recipe_ingredients").insert({
        //   recipe_id: id,
        //   ingredient_id: ing_id,
        //   amount: body.ingredients[i].amount
        // });
      })
    );
    // return "from postRecIng";
  }
};

module.exports = RecipeService;
