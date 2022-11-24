const { Router } = require('express')
const {
  getAllUsers,
  getUserById,
  getUserWithAddres
} = require('../controllers/users')

const router = Router()

router.get('/', getAllUsers)
router.get('/:id', getUserById)
router.get('/addres/:id', getUserWithAddres)


module.exports = router  