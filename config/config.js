require("dotenv").config();

const { DB_HOST, DB_USER, DB_PASS, DB_DATABASE} = process.env;

module.exports = {
  "development": {
    "username": DB_USER,
    "password": DB_PASS,
    "database": DB_DATABASE,
    "host": DB_HOST,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
