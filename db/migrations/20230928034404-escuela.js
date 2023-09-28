'use strict';

const {EscuelaSchema, TABLA_ESCUELA} = require('../models/escuela')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    const create_table = await queryInterface.createTable(TABLA_ESCUELA,EscuelaSchema)
    console.log(create_table,'juan platanos')
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(TABLA_ESCUELA)
  }
};
