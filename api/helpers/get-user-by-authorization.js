/**
 * @helper
 * getUserByAuthorization check token auth and return user
 */
const jwt = require('jsonwebtoken');
module.exports = {
  friendlyName: 'Get user by authorization',
  description: 'check token auth and return user',
  inputs: {
    token: {
      type: 'string',
      required: true
    }
  },
  exits: {
    success: {
      outputFriendlyName: 'User by authorization',
    },
    error: {
      outputFriendlyName: 'An error occured',
    }
  },
  fn: async function (inputs, exits) {
    try {
      const decoded = jwt.verify(inputs.token, sails.config.custom.secret);
      if (decoded.id) {
        const user = await User.findOne({
          id: decoded.id
        });
        if (user) {
          delete user.password;
          return exits.success(user);
        } else {
          return exits.error();
        }
      } else {
        return exits.error();
      }
    } catch (e) {
      console.error(e);
      return exits.error(e);
    }
  }
};

