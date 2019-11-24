const IngredientService = {
  getAllIngredients(db) {
    return db.select("*").from("ingredients");
  },
  getByRecipeId(db, recipe_id) {
    console.log(`recipe_id in service: ${recipe_id}`);
    // return db("recipe_ingredients")
    //   .join("ingredients", "recipe_ingredients.ingredient_id", "ingredients.id")
    //   .select("ingredient_amount AS amount", "name")
    //   .where({ recipe_id })
    //   .returning("*")
    //   .then(console.log);
    db.raw(
      "select ingredient_amount, name from recipe_ingredients JOIN ingredients on ingredients.id = recipe_ingredients.ingredient_id;"
    );
  }
};

module.exports = IngredientService;
