const sequelize = require('../config/database');
const User = require('./User');
const Dependent = require('./Dependent');

// Define as associações entre os modelos
User.hasMany(Dependent, { foreignKey: 'UserId', as: 'dependents' });
Dependent.belongsTo(User, { foreignKey: 'UserId', as: 'user' });

const db = {
  sequelize,
  User,
  Dependent
};

module.exports = db;
