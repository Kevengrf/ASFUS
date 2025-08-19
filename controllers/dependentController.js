const { Dependent, User } = require('../models');

// Lista os dependentes do usuário logado
exports.getDependents = async (req, res) => {
  try {
    const dependents = await Dependent.findAll({ where: { UserId: req.user.id } });
    res.json(dependents);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erro no servidor.');
  }
};

// Adiciona um novo dependente
exports.addDependent = async (req, res) => {
  const { nome, parentesco } = req.body;
  
  try {
    const newDependent = await Dependent.create({
      nome,
      parentesco,
      UserId: req.user.id
    });

    res.status(201).json(newDependent);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erro no servidor.');
  }
};
