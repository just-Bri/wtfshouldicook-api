require("dotenv").config();
const pg = require("pg");
const app = require("./app");
const { PORT, DATABASE_URL } = require("./config");
const knex = require("knex");
const connect = require("../knexfile");

const db = knex(connect);
app.set("db", db);

app.listen(PORT, () => {
  console.log(`Server listening at ${DATABASE_URL}:${PORT}`);
});
