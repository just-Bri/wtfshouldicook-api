-- INSERT ... ON CONFLICT DO NOTHING/UPDATE
BEGIN;

INSERT into
  recipes (name, prep_time, cook_time, cuisine, complexity)
VALUES
  ('test name', '1', '2', 'Italian', '1');

INSERT into
  ingredients (name)
VALUES
  ('chicken'),
  ('pasta'),
  ('sauce') ON CONFLICT DO NOTHING;

INSERT into
  recipe_ingredients (recipe_id, ingredient_id, ingredient_amount)
VALUES
  (1, 1, '1lb'),
  (1, 2, 'enough'),
  (1, 3, '1 jar');

INSERT into
  instructions (recipe_id, step_number, instructions)
VALUES
  (1, 1, 'do stuff'),
  (1, 2, 'do more stuff'),
  (1, 3, 'do more more stuff'),
  (1, 4, 'do more more more stuff');

COMMIT;