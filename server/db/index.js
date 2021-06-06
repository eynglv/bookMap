const db = require("./database");
const Book = require("./book");
const Country = require("./countries");

//set associations
Book.belongsTo(Country);
Country.hasMany(Book);

module.exports = {
  db,
  Book,
  Country,
};
