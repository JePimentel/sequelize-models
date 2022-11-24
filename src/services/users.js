const Address = require('../models/addresses.models')
const Tasks = require('../models/tasks.models')
const Users = require('../models/users.models')

const userAttributes = { 
  attributes: ['id', 'username', 'email']
} 

class UserService {
  static async getAll() {
    try {
      return await Users.findAll(userAttributes)
    } catch (error) {
      throw(error)
    }
  }

  static async getById(id) {
    try {
      return await Users.findByPk(id, userAttributes)
    } catch (error) {
      throw(error)
    }
  }

  static async getWithAddres(id) {
    try {
      return await Users.findOne({
        where: { id },
        include: [
          {
            model: Address,
            attributes: ['street', 'number'],
            required: false
          },
          {
            model: Tasks,
            required: false
          }
        ],
        attributes: userAttributes.attributes
      })
    } catch (error) {
      throw(error)
    }
  }
}

module.exports = UserService