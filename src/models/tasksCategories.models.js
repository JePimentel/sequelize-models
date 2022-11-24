const db = require('../helpers/database')
const { DataTypes } = require('sequelize')
const Tasks = require('./tasks.models')
const Categories = require('./categories.models')

const TasksCategories = db.define('tasks_categories', {
  taskId: {
    field: "task_id",
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Tasks,
      key: 'id'
    }
  },
  categoryId: {
    field: "category_id",
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Categories,
      key: 'id'
    }
  }
}, {
  timestamps: false
})

module.exports = TasksCategories