BEGIN;

INSERT into
  ingredients (name)
VALUES
  ('ground pork'),
  ('shrimp'),
  ('ginger , freshly grated'),
  ('soy sauce'),
  ('shaoxing wine'),
  ('sea salt'),
  ('white pepper'),
  ('napa cabbage'),
  ('green onions'),
  ('sesame oil'),
  ('frozen dumpling wrappers');

INSERT into
  recipe_ingredients (recipe_id, ingredient_id, ingredient_amount)
VALUES
  (7, 50, '450 grams'),
  (7, 51, '250 grams'),
  (7, 52, '1 tablespoon'),
  (7, 53, '2 tablespoons'),
  (7, 54, '2 tablespoons'),
  (7, 55, '1 teaspoon'),
  (7, 56, '1/4 teaspoon'),
  (7, 57, '450 grams'),
  (7, 58, '4, finely chopped'),
  (7, 59, '2 tablespoons'),
  (7, 60, '1 package');

COMMIT;