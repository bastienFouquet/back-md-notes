/**
 * @controller
 * UserController
 */

const {v4} = require('uuid');
module.exports = {
  auth: async (req, res) => {
    const connection = await sails.helpers.authByCredentials.with({
      login: req.body.login,
      password: req.body.password
    });
    if (connection) {
      return res.json(connection);
    } else {
      return res.badRequest();
    }
  },
  create: async (req, res) => {
    try {
      const user = await User.create({
        id: v4(),
        login: req.body.login,
        password: req.body.password
      }).fetch();
      if (user) {
        delete user.password;
        return res.json(user);
      }
    } catch (e) {
      console.error(e);
      return res.serverError(e);
    }
  }
};

