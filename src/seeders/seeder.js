const db = require('../helpers/database')

const Users = require('../models/users.models')
const Categories = require('../models/categories.models')
const Addresses = require('../models/addresses.models')

const seeds = require('../resourcers')
const initModels = require('../models')

initModels()

db.sync({ force: false })
  .then(() => Users.bulkCreate(seeds.usersSeed))
  .then(() => Categories.bulkCreate(seeds.categoriesSeed))
  .then(() => Addresses.bulkCreate(seeds.addressesSeed))
  .catch(err => console.log('Error :: sync-seeder :: ', err))
