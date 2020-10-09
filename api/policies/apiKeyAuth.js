/**
 * @policies
 * Check if api key auth
 */
module.exports = function (req, res, next) {
  const apiKey = req.header('x-api-key');
  if (apiKey === sails.config.globals.apiKey) {
    return next();
  }
  // User is not allowed
  // (default res.forbidden() behavior can be overridden in `config/403.js`)
  return res.forbidden('You are not permitted to perform this action.');
};
