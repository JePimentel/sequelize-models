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

const createUser = async (req, res) => {
  try {
    const userData = req.body
    const result = await UserService.add(userData)
    res.status(201).json(result)
  } catch (error) {
    console.log('Error :: createUser :: ',error)
  }
}

const updateUser = async (req, res) => {
  try {
    const { id } = req.params
    const newData = req.body
    const result = await UserService.update(id, newData)
    res.status(201).json(result)
  } catch (error) {
    console.log('Error :: updateUser :: ',error)
  }
}
 
module.exports = {
  getAllUsers,
  getUserById,
  getUserWithAddres,
  createUser,
  updateUser
}