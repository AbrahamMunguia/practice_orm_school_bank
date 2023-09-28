const {Escuela,EscuelaSchema} = require('./escuela')

function setupModels(sequelize){
  Escuela.init(EscuelaSchema,Escuela.config(sequelize))
}

module.exports = setupModels