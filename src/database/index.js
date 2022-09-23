const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/testDB');
mongoose.Promise = global.Promise;

module.exports = mongoose;