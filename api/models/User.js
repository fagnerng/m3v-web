/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    username:{
      type: "string",
      required: true,
      unique: true,
    },
    password:{
      type: "string",
      defaultsTo : ""
    },
    email:{
      type:"email",
      unique: true
    },

    toJSON: function () {
      var obj = this.toObject();
      delete obj.password;
      return obj;
    }

  }
};

