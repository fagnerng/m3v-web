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
      type: "float"
    },
    height: {
      type: "float"
    },
    dap: {
      type: "float"
    },
    cap: {
      type: "float"
    },
    biological: {
      type: "float"
    },
    anthropic: {
      type: "float"
    },
    latitude: {
      type: "float"
    },
    longitude: {
      type: "float"
    }
  }
};

