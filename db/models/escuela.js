const { Model, DataTypes, Sequelize } = require('sequelize');

const TABLA_ESCUELA = 'escuela';

const EscuelaSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  matricula: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  location: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'Guatemala'
  },
  name:{
    allowNull: false,
    type: DataTypes.STRING(50),
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

class Escuela extends Model {
  static associate(models) {
    
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: TABLA_ESCUELA,
      modelName: 'escuela',
      timestamps: false
    }
  }
}


module.exports = { TABLA_ESCUELA, EscuelaSchema, Escuela }