const Sequelize = require("sequelize");
const db = require("./database");

const Country = db.define("countries", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Country;
