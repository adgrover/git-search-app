const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User Schema
const IdSchema = mongoose.Schema ({
  id: {
    type: Number,
    required: true
  }
});

const Id = module.exports = mongoose.model('Id', IdSchema);

module.exports.addId = function(newId, callback) {
  newId.save(callback);
}

module.exports.findId = function(newId, callback) {
  Id.find(callback);
}



