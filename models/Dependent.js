const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Dependent = sequelize.define('Dependent', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  parentesco: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Dependent;
