const express = require('express');
const cors = require('cors');
const db = require('./models');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors()); // Permite requisições de diferentes origens
app.use(express.json()); // Habilita o parsing de JSON no corpo das requisições

// Rotas da API
app.use('/api/auth', require('./routes/auth'));
app.use('/api/dependents', require('./routes/dependents'));

// Rota de teste
app.get('/', (req, res) => {
  res.send('API da ASFUS está no ar!');
});

const PORT = process.env.PORT || 3000;

// Sincroniza o banco de dados e inicia o servidor
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}).catch(err => {
  console.error('Não foi possível conectar ao banco de dados:', err);
});
