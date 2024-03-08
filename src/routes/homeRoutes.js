const express = require('express');
const homeController = require('../controllers/HomeController.js');

const router = new express.Router();

router.get('/', homeController.index);

module.exports = router;
