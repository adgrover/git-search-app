const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User Schema
const UserSchema = mongoose.Schema ({
  id: 0
});

const User = module.exports = mongoose.model('User', UserSchema);

