DROP TABLE IF EXISTS "hardware";

DROP TABLE IF EXISTS "recipe_hardware";

CREATE TABLE "hardware" (
  id integer not null generated always as identity,
  "name" varchar(50) NOT NULL
);

CREATE TABLE "recipe_hardware" (
  "recipe_id" int NOT NULL,
  "hardware_id" int NOT NULL,
  FOREIGN KEY ("hardware_id") REFERENCES "hardware" ("id"),
  FOREIGN KEY ("recipe_id") REFERENCES "recipes" ("id")
);

CREATE UNIQUE INDEX "PK_hardware" ON "hardware" ("id");

CREATE UNIQUE INDEX "PK_instructions" ON "instructions" ("id");

CREATE INDEX "fkIdx_72" ON "instructions" ("recipe_id");

CREATE UNIQUE INDEX "PK_recipe_reqs" ON "recipe_ingredients" ("ingredient_id", "recipe_id");

CREATE INDEX "fkIdx_56" ON "recipe_ingredients" ("ingredient_id");

CREATE UNIQUE INDEX "PK_recipe_hardware" ON "recipe_hardware" ("hardware_id", "recipe_id");

CREATE INDEX "fkIdx_76" ON "recipe_hardware" ("hardware_id");

CREATE INDEX "fkIdx_79" ON "recipe_hardware" ("recipe_id");

CREATE UNIQUE INDEX "PK_recipes" ON "recipes" ("id");