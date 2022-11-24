const UserService = require('../services/users')

const getAllUsers = async (req, res) => {
  try {
    const result = await UserService.getAll()
    res.status(200).json(result)
  } catch (error) {
    throw(error)
  }
}

const getUserById = async (req, res) => {
  try {
    const { id } = req.params
    const result = await UserService.getById(id)
    res.status(200).json(result)
  } catch (error) {
    throw(error)
  }
}

const getUserWithAddres = async (req, res) => {
  try {
    const { id } = req.params
    const result = await UserService.getWithAddres(id)
    res.status(200).json(result)
  } catch (error) {
    console.log('Error :: getUserWithAddres :: controller :: ', error)
  }
}
 
module.exports = {
  getAllUsers,
  getUserById,
  getUserWithAddres
}