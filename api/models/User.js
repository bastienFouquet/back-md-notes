/**
 * @model
 * User.js
 */
module.exports = {
  tableName: 'user', primaryKey: 'id',
  attributes: {
    id: {
      type: 'string',
      unique: true,
      required: true
    },
    login: {
      type: 'string',
      unique: true,
      required: true
    },
    password: {
      type: 'string',
      required: true
    }
  },

  beforeCreate: async function (recordToCreate, proceed) {
    recordToCreate.password = await sails.helpers.hashPassword.with({
      password: recordToCreate.password
    }).catch(e => proceed(e));
    proceed();
  },
};
