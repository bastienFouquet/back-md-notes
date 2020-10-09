/**
 * @controller
 * UserController
 */

module.exports = {
  auth: async (req, res) => {
    const connection = await sails.helpers.authByCredentials.with({
      login: req.body.login,
      password: req.body.password
    });
    if (connection) {
      return res.json(connection);
    } else {
      return res.status(401);
    }
  },
  create: async (req, res) => {
    try {
      const user = await User.create({
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

