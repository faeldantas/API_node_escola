const User = require('../models/User.js');

class UserController {
  async store(req, res) {
    const novoUser = await User.create({
      nome: 'Rafael',
      email: 'rafael@gmail.com',
      password: 'atecubanos123',
    });
    res.json(novoUser);
  }
}

module.exports = new UserController();
