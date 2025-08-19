const jwt = require('jsonwebtoken');
// Crie um arquivo .env na raiz com a sua chave, ex: JWT_SECRET=sua_chave_secreta
require('dotenv').config(); 

module.exports = function(req, res, next) {
  // Pega o token do header
  const authHeader = req.header('Authorization');

  // Verifica se o header de autorização existe
  if (!authHeader) {
    return res.status(401).json({ msg: 'Nenhum token, autorização negada.' });
  }

  // Verifica se o token está no formato Bearer
  const parts = authHeader.split(' ');
  if (parts.length !== 2 || parts[0] !== 'Bearer') {
    return res.status(401).json({ msg: 'Token mal formatado.' });
  }
  
  const token = parts[1];

  // Verifica se o token existe
  if (!token) {
    return res.status(401).json({ msg: 'Nenhum token, autorização negada.' });
  }

  // Valida o token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token inválido.' });
  }
};
