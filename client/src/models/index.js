const Sequelize = require('sequelize')
const allConfigs = require('../config/sequelize')
const StudentsModel = require('./students')

const environment = process.env.NODE_ENV || 'development'
const config = allConfigs[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect
})

const Students = StudentsModel(connection, Sequelize)

module.exports = {
  Students,
  Sequelize
}