const db = require('../helpers/database')
const { DataTypes } = require('sequelize')

const Categories = db.define('categories', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(55),
    allowNull: false
  }
}, {
  timestamps: false
})

module.exports = Categories