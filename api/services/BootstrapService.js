/**
 * BootstrapService.js
 */
var userAdmin = {
  username: 'admin',
  password: 'senha#123',
  email: 'fagnerngomes@gmail.com'
};
module.exports = {

  start: function() {
    var pkg = require('../../package.json');
    var pversion = pkg.version;
    var pname= pkg.name;
    sails.log.debug("init app " + pname + ": version = " + pversion);

    this.initDatabase((err) => {
      if(err) {
        sails.log.error("Error initializing database", err);
      }
    });
  },

  initDatabase: function(callback) {
    User.findOrCreate({username: userAdmin.username},userAdmin).exec((err) => {callback(err);});
  }

};
