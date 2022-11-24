const express = require('express')
const db = require('./helpers/database')
const initModels = require('./models')
require('dotenv').config()

const userRoutes = require('./routes/users')

const app = express()

app.use(express.json())

console.log(process)

const PORT = process.env.PORT

db.authenticate()
  .then(() => console.log('database authenticated'))
  .catch(err => console.log('authenticate ::: ', err))

db.sync({ force: false })
  .then(() => console.log('db synchronized'))
  .catch(err => console.log('db sync error ', err))

initModels() // Iniciando modelos

app.get('/', (req, res) => res.status(200).json('working'))

app.use('/api/v1/users', userRoutes)

app.listen(PORT, () => console.log('Listening'))