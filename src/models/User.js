const Sequelize = require('sequelize');
const Model = require('sequelize').Model;
const bcryptjs = require('bcryptjs');

class User extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            arg: [3, 255],
            msg: 'Campo nome deve ter entre 3 e 255 caracteres.',
          },
        },
      },
      email: Sequelize.STRING,
      password_hash: Sequelize.STRING,
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            arg: [6, 50],
            msg: 'Campo senha deve ter entre 6 e 50 caracteres.',
          },
        },
      },
      Sequelize,
    });
    this.addHook('beforeSave', async (user) => {
      user.password_hash = await bcryptjs.hash(user.password, 8);
    });
  }
}

module.exports = User;
