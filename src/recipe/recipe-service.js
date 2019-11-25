const RecipeService = {
  getAllRecipes(db) {
    return db.select("*").from("recipes");
  },
  getById(db, id) {
    return db("recipes").where({ id });
  },
  getRecipeDetails(id) {
    fetch(`${config.API_ENDPOINT}/api/recipe/${id}`)
      .then(response => {
        return response.json();
      })
      .then(recipe => {
        this.setState({ recipeDetails: recipe });
      });
  },
  getRecipeIngredients(id) {
    fetch(`${config.API_ENDPOINT}/api/ingredient/${id}`)
      .then(response => {
        return response.json();
      })
      .then(ingredients => {
        this.setState({ recipeIngredients: ingredients });
      });
  },
  getRecipeInstructions(id) {
    fetch(`${config.API_ENDPOINT}/api/instruction/${id}`)
      .then(response => {
        return response.json();
      })
      .then(instructions => {
        this.setState({ recipeInstructions: instructions });
      });
  },
  getByAnswers(db, answers) {
    console.log(`answers: ${answers}`);
    console.log(`answers.cuisine: ${answers.cuisine}`);
    console.log(`answers.complexity: ${answers.complexity}`);
    let comSym = answers.complexity === "yes" ? ">" : "<";
    return db("recipes")
      .count("id as CNT")
      .where("complexity", comSym, "3")
      .andWhere({ cuisine: answers.cuisine })
      .then(response => {
        let count = Object.values(response[0]);
        let rand = Math.floor(Math.random() * Math.floor(count));
        return Promise.all([
          this.getRecipeDetails(rand),
          this.getRecipeIngredients(rand),
          this.getRecipeInstructions(rand)
        ])
          .then(res => console.log("Promise.all", res))
          .catch(e => console.log("Promise.all e", e));
      });
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
    return Promise.all(
      body.ingredients.map((ing, i) => {
        return db("recipe_ingredients").insert({
          recipe_id: parseInt(id[i], 10),
          ingredient_id: parseInt(ing_id[i], 10),
          ingredient_amount: ing.amount
        });
      })
    );
  }
};

module.exports = RecipeService;
