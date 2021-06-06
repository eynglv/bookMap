const Sequelize = require("sequelize");
const db = require("./database");
const DataTypes = require("sequelize/lib/data-types");

const Country = db.define("countries", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  geometry: {
    type: DataTypes.GEOMETRY,
    values: Sequelize.ENUM({ values: ["POLYGON", "MULTIPOLYGON"] }),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Country;
