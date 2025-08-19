const express = require('express');
const router = express.Router();
const dependentController = require('../controllers/dependentController');
const authMiddleware = require('../middleware/auth');

// @route   GET api/dependents
// @desc    Retorna os dependentes do usuário logado
// @access  Private
router.get('/', authMiddleware, dependentController.getDependents);

// @route   POST api/dependents
// @desc    Adiciona um novo dependente
// @access  Private
router.post('/', authMiddleware, dependentController.addDependent);

module.exports = router;
