const {models} = require('../libs/sequelize')

class UserService {
  constructor(){}
  async find(){
    const rta = await models.escuela.findAll()
    return rta
  }
}

module.exports = UserService