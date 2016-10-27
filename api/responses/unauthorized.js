/**
 * 401 (UNAUTHORIZED) Response
 *
 * Usage:
 * return res.created();
 * return res.created(data);
 * return res.created(data, 'auth/login');
 *
 * @param  {Object} data
 * @param  {String|Object} options
 *          - pass string to render specified view
 */

module.exports = function unauthorized (data, options) {
  // Get access to `req`, `res`, & `sails`
  var req = this.req;
  var res = this.res;
  var sails = req._sails;

  sails.log.silly('res.unauthorized() :: Sending 401 response');

  // Set status code
  res.status(401);
  res.details = data;

  return res.jsonx(data);
};
