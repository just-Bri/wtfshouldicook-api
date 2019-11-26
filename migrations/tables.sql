DROP TABLE IF EXISTS "ingredients" CASCADE;

DROP TABLE IF EXISTS "instructions" CASCADE;

DROP TABLE IF EXISTS "recipe_ingredients" CASCADE;

DROP TABLE IF EXISTS "recipes" CASCADE;

CREATE TABLE "recipes" (
  "id" integer not null generated always as identity,
  "name" varchar(50) NOT NULL,
  "prep_time" int NOT NULL,
  "cook_time" int NOT NULL,
  "cuisine" varchar(50) NOT NULL,
  "complex" boolean NOT NULL,
  primary key (id)
);

CREATE TABLE "ingredients" (
  id integer not null generated always as identity,
  "name" varchar(50) UNIQUE NOT NULL,
  primary key (id)
);

CREATE TABLE "instructions" (
  id integer not null generated always as identity,
  "recipe_id" int not null,
  "step_number" int NOT NULL,
  "instructions" varchar(500) NOT NULL,
  primary key (id),
  FOREIGN KEY (recipe_id) REFERENCES recipes(id)
);

CREATE TABLE "recipe_ingredients" (
  "recipe_id" int NOT NULL,
  "ingredient_id" int NOT NULL,
  "ingredient_amount" varchar(50) NOT NULL,
  FOREIGN KEY ("recipe_id") REFERENCES "recipes" ("id"),
  FOREIGN KEY ("ingredient_id") REFERENCES "ingredients" ("id")
);