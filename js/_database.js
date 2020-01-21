const pg = require("pg");

const client = new pg.Client({
    host:'localhost',
    database:'postgres',
    port:'5432',
    user:'postgres',
    password:'postgres'
});

module.exports = client;