const Sequelize = require('sequelize');
const databaseConfig = require('../config/database.js');
const Aluno = require('../models/Aluno.js');
const User = require('../models/User.js');

const models = [Aluno];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
