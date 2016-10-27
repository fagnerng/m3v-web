/**
 * AuthController
 *
 * @description :: Server-side logic for managing auth
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  login: function (req, res) {
    var username = req.param('username');
    var password = req.param('password');
    var reqId = req.request_id | req.param('request_id');

    if (!username) {
      return res.unauthorized('username required');
    }

    User.findOne({username: username}).exec(function (err, user) {
      if (!user) {
        return res.unauthorized('invalid username or password');
      }

      User.comparePassword(password, user, function (err, valid) {
        if (err) {
          res.forbidden();
        }

        if (!valid) {
          return res.unauthorized('invalid username or password');
        } else {
          sails.log(reqId);
          res.json({
            user: user,
            token: AuthService.issue({id : user.id, username: user.username, reqId: reqId})
          });

        }
      });
    })
  }
};
