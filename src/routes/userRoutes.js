const express = require('express');
const userController = require('../controllers/UserController.js');

const router = new express.Router();

router.post('/', userController.store);

module.exports = router;

/**
 * index: lista todos os usuários -> GET
 * store/create: cria usuário -> POST
 * delete: deleta usuário -> DELETE
 * show: mostra usuário -> GET
 * update: atualiza usuário -> PATCH or PUT
 */
