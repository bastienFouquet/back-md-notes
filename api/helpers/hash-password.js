/**
 * @helper
 * hashPassword helper
 */
const bcrypt = require('bcryptjs');
module.exports = {
  friendlyName: 'Hash password',
  description: 'has password',
  inputs: {
    password: {
      type: 'string',
      required: true
    }
  },
  exits: {
    success: {
      description: 'All done.',
    },
    error: {
      description: 'An error occured'
    }
  },
  fn: async function (inputs, exits) {
    try {
      const passwordHashed = bcrypt.hashSync(inputs.password, 10);
      return exits.success(passwordHashed);
    } catch (e) {
      console.error(e);
      return exits.error(e);
    }
  }
};

