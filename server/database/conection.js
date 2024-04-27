const { Sequelize } = require("sequelize");
const { DATABASE_HOST, DATABASE_USER, DATABASE_PASSWORD, DATABASE } =
  process.env;
// const sequelize = new Sequelize('sqlite::memory:');

const sequelize = new Sequelize(
  DATABASE,
  DATABASE_USER,
  DATABASE_PASSWORD,

  {
    DATABASE_HOST,
    dialect: "mysql",
  }
);

module.exports = sequelize;
