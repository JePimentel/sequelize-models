const Address = require('./addresses.models')
const Categories = require('./categories.models')
const Tasks = require('./tasks.models')
const TasksCategories = require('./tasksCategories.models')
const Users = require('./users.models')

const defaultScope = {
  where: {
    status: true
  }
}

const initModels = () => {
  Users.addScope("defaultScope", defaultScope)
  
  Categories.belongsToMany(Tasks, { through: TasksCategories }) 
  Tasks.belongsToMany(Categories, { through: TasksCategories }) 
  
  Users.hasMany(Tasks, { foreignKey: 'user_id' })
  Tasks.belongsTo(Users, { foreignKey: 'user_id' })

  Users.hasOne(Address, { foreignKey: 'user_id' })
  Address.belongsTo(Users, { foreignKey: 'user_id' })
  
}

module.exports = initModels