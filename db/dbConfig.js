const pgp = require("pg-promise")();
require("dotenv").config();

const cn = { // the location, this is the url
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
    user: process.env.PG_USER,
  };

const db = pgp(cn); // pgp will make 1 string similar to an HTTP request - object to allow us make request to database

db.connect() // return a promise, connecting to another software/server is asynchronous
  .then((cn) => {
    const { user, host, port, database } = cn.client;
    console.log(
      "\x1b[90m" +
        `Postgres connection established with user:${user}, host:${host}, port:${port}, database:${database}` +
        "\x1b[0m"
    );
    cn.done();
  })
  .catch((error) => console.log("database connection error", error));

module.exports = db;