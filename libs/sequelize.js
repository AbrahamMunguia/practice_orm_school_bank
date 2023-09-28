const { Sequelize } = require('sequelize');
const setupModels = require('../db/models');

const URI = `postgres://admin:admin123@localhost:5432/school`;

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: true,
});
setupModels(sequelize)
sequelize.sync()
module.exports = sequelize;