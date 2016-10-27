/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var bcrypt = require('bcrypt');

module.exports = {

    autoCreatedAt: false,
    autoUpdatedAt: false,
    attributes: {
      username: {
          type: "string",
          required: true,
          unique: true
      },
      password: {
          type: "string",
          required: true
      },
      email: {
          type: "email",
          unique: true
      },

      toJSON: function () {
          var obj = this.toObject();
          delete obj.password;
          return obj;
      }
    },
    beforeCreate : function (values, next) {
      User.hashPassword(values, next);
    },

    beforeUpdate: function(values, next) {
      if (values.password || values.password == "") {
        User.hashPassword(values, next);
      } else {
        next();
      }
    },

    hashPassword : function (values, next) {
      bcrypt.genSalt(10, function (err, salt) {
        if(err) return next(err);
        bcrypt.hash(values.password, salt, function (err, hash) {
          if(err) return next(err);
          values.password = hash;
          next();
        })
      })
    },

    comparePassword : function (password, user, cb) {
      bcrypt.compare(password, user.password, function (err, match) {

        if(err) cb(err);
        if(match) {
          cb(null, true);
        } else {
          cb(err);
        }
      })
    }
};

