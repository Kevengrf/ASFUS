const { Sequelize } = require('sequelize');

// Configura a conexão com o banco de dados SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite', // Arquivo que armazenará o banco de dados
  logging: false // Desabilita os logs do SQL no console
});

module.exports = sequelize;
