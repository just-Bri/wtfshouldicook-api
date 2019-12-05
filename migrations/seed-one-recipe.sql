-- INSERT ... ON CONFLICT DO NOTHING/UPDATE
BEGIN;

INSERT into
  recipes (name, prep_time, cook_time, cuisine, complex)
VALUES
  (
    'five can chili',
    '10',
    '25',
    'americann',
    'false'
  );

INSERT into
  ingredients (name)
VALUES
  ('medium onion'),
  ('black beans'),
  ('red kidney beans'),
  ('diced tomato'),
  ('chipolte peppers in adobo'),
  ('beer (lager pref)'),
  ('sea salt'),
  ('garlic powder'),
  ('cumin');

INSERT into
  recipe_ingredients (recipe_id, ingredient_id, ingredient_amount)
VALUES
  (1, 1, '1'),
  (1, 2, '1 can (14oz)'),
  (1, 3, '1 can (14oz)'),
  (1, 4, '1 can (14oz)'),
  (1, 5, '1 can'),
  (1, 6, '1 can (12oz)'),
  (1, 7, '2 teaspoons'),
  (1, 8, '1 teapoon'),
  (1, 9, '1 teaspoon');

INSERT into
  instructions (recipe_id, step_number, instructions)
VALUES
  (
    1,
    1,
    'Begin by prepping the chipotles. Most of the heat in the peppers are housed in the seeds and ribs, so we strongly recommend scraping out all of the seeds before adding the peppers to the chili, especially if using the entire can. Using a fork, remove the desired number of peppers from the can. Reserve the adobo sauce. Slice them open, and then using the back of your knife, scrape out and discard the seeds & ribs. Roughly chop the peppers and set them aside.'
  ),
  (
    1,
    2,
    'In a large dutch oven, heat the olive oil over medium heat until shimmering. Add the onions and saute until they begin to soften and turn translucent. Add the drained kidney and black beans, tomatoes and their juices, chopped chipotles and the adobo sauce, beer, salt and spices. Stir to combine.'
  ),
  (
    1,
    3,
    'Cook the chili until thickened to your liking, about 20 minutes. Serve immediately with your choice of toppings (cheese, avocado, green onions, etc) and cornbread on the side!'
  );

COMMIT;