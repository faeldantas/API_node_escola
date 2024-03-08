const Aluno = require('../models/Aluno.js');

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Rafael',
      sobrenome: 'Dantas',
      email: 'rafael@gmail.com',
      idade: 20,
      peso: 75.0,
      altura: 1.67,
    });
    res.json(novoAluno);
  }
}

module.exports = new HomeController();
