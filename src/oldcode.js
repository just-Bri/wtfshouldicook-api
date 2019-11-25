// const db = req.app.get("db");
// console.log("post recieved, req.body = " + req.body);
// const {
//   name = recipeDetails[0].name,
//   prep_time = recipeDetails[0].prep_time,
//   cook_time = recipeDetails[0].cook_time,
//   picture_url = recipeDetails[0].picture_url,
//   cuisine = recipeDetails[0].cuisine,
//   complex = recipeDetails[0].complex,
//   ingredients = recipeIngredients.forEach(item => {
//     return { name: item.name, amount: item.amount };
//   }),
//   instructions = recipeInstructions.forEach(item => {
//     return {
//       step_number: item.step_number,
//       instructions: item.instructions
//     };
//   })
// } = req.body;
// const newRec = {
//   name,
//   prep_time,
//   cook_time,
//   cuisine,
//   complex,
//   picture_url,
//   ingredients,
//   instructions
// };

// RecipeService.postRecipe(db, newRec)
//   .then(() => {
//     res
//       .status(201)
//       .location("/")
//       .json(serializeRecipe(newRec));
//   })
//   .catch(next);
