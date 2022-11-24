const { Router } = require('express')
const {
  getAllUsers,
  getUserById,
  getUserWithAddres,
  createUser,
  updateUser
} = require('../controllers/users')

const router = Router()

router.post('/', createUser)
router.get('/', getAllUsers)
router.get('/:id', getUserById)
router.get('/addres/:id', getUserWithAddres)
router.put('/:id', updateUser)


module.exports = router  