const db = require('../helpers/database')
const { DataTypes } = require('sequelize')

const Tasks = db.define('tasks', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING(100),
    allowNull: false
  }, 
  description: {
    type: DataTypes.STRING
  },
  isCompleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false,
    field: "is_completed"
  }
})

module.exports = Tasks