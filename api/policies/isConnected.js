/**
 * @policies
 * Check if connected
 */
const jwt = require('jsonwebtoken');
module.exports = async function (req, res, next) {
  const token = req.header('Authorization');
  if (token) {
    if (jwt.verify(token, sails.config.custom.secret)) {
      return next();
    }
  }
  // User is not allowed
  // (default res.forbidden() behavior can be overridden in `config/403.js`)
  return res.forbidden('You are not permitted to perform this action.');
};
