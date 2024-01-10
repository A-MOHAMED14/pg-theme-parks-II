/**
 * Create your connection to the DB in this file
 * and remember to export it
 */

const { Pool } = require("pg");

if (process.env.PGDATABASE === undefined) {
  throw new Error("No PGDATABASE configured");
}

const pool = new Pool();

module.exports = pool;
