const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
require('dotenv').config();

// Registro de novo usuário
exports.register = async (req, res) => {
  const { nome, email, cpf, senha } = req.body;

  try {
    // Verifica se o usuário já existe
    let user = await User.findOne({ where: { email } });
    if (user) {
      return res.status(400).json({ msg: 'Usuário com este e-mail já existe.' });
    }
    
    user = await User.findOne({ where: { cpf } });
    if (user) {
      return res.status(400).json({ msg: 'Usuário com este CPF já existe.' });
    }

    // Cria o novo usuário (a senha será hasheada pelo hook do modelo)
    user = await User.create({ nome, email, cpf, senha });

    res.status(201).json({ msg: 'Usuário registrado com sucesso!' });

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erro no servidor.');
  }
};

// Login do usuário
exports.login = async (req, res) => {
  const { email, senha } = req.body;

  try {
    // Verifica se o usuário existe
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ msg: 'Credenciais inválidas.' });
    }

    // Compara a senha enviada com a do banco
    const isMatch = await bcrypt.compare(senha, user.senha);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Credenciais inválidas.' });
    }

    // Gera o token JWT
    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 3600 }, // Token expira em 1 hora
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erro no servidor.');
  }
};
