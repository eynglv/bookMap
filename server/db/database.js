const chalk = require("chalk");
const Sequelize = require("sequelize");

const dbName = "books";

const db = new Sequelize(`postgres://localhost:5432/${dbName}`, {
  logging: false,
});

console.log(chalk.yellow(`Opening database connection to ${dbName}`));
module.exports = db;
