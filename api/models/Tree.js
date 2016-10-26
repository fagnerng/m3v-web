/**
 * Tree.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    number: {
      type:"int",
      unique: true
    },
    species: {
      type: "string"
    },
    fuste: {
      type: "double"
    },
    height: {
      type: "double"
    },
    dap: {
      type: "double"
    },
    cap: {
      type: "double"
    },
    biological: {
      type: "double"
    },
    anthropic: {
      type: "double"
    },
    latitude: {
      type: "double"
    },
    longitude: {
      type: "double"
    }
  }
};

