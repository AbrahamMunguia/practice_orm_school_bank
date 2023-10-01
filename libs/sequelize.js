const { Sequelize } = require('sequelize');
const setupModels = require('../db/models');

//const URI = `postgres://admin:admin123@localhost:5432/school`;

const sequelize = new Sequelize('school',"admin123","admin123",{
  host: "localhost",
  dialect: "mysql",
  port: 3306
});
setupModels(sequelize)
sequelize.sync()
module.exports = sequelize;