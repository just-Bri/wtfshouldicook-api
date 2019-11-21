const IngredientService = {
  getAllIngredients(db) {
    return db.select("*").from("ingredients");
  },
  getByRecipeId(db, recipe_id) {
    return db("recipe_ingredients")
      .join("ingredients", "recipe_ingredients.ingredient_id", "ingredients.id")
      .select("ingredient.amount", "recipe_ingredients.amount")
      .where("recipe_id", "=", `${recipe_id}`);
    // .rightJoin();
    // .join("ingredients", {
    //   "recipe_ingredients.ingredient_id": "ingredients.id"
    // });
    // join select ing_name from ingredients where id ing.ingredient_id
  }
};

module.exports = IngredientService;
