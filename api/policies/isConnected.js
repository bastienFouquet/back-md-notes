/**
 * @policies
 * Check if connected
 */
const jwt = require('jsonwebtoken');
module.exports = async function (req, res, next) {
  const token = req.header('Authorization');
  if (token) {
    const decoded = jwt.verify(token, sails.config.custom.secret);
    if (decoded) {
      req.connection.user = decoded;
      return next();
    }
    return res.sendStatus(401);
  }
  // User is not allowed
  // (default res.forbidden() behavior can be overridden in `config/403.js`)
  return res.forbidden('You are not permitted to perform this action.');
};
