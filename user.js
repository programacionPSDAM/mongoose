var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/ejercicio');

var Schema = mongoose.Schema ;

var userSchema = new Schema({
  id         : Number,
  first_name : String,
  last_name  : String,
  email      : String
});

var User = mongoose.model('Users', userSchema);

module.exports.User = User;
module.exports.db   = db;
