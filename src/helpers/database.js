const { Sequelize } = require("sequelize");
require('dotenv').config()

const db = new Sequelize({
  database: process.env.DB_NAME || "todo",
  username: process.env.USERNAME_DB || "postgres",
  host: process.env.HOST_DB || "localhost",
  port: process.env.PORT_DB || 5432,
  password: process.env.PASSWORD_DB || "root",
  dialect: process.env.DIALECT_DB || "postgres"  
})

module.exports = db