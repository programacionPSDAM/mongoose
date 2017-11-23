var User = require('./user.js').User;
var db = require('./user.js').db;

var newUser = User({
  id         : 1001,
  first_name : 'joaquín',
  last_name  : 'Reyes García',
  email      : 'joaquin@dominio.com'
});

newUser.save(function(err){
  if (err) throw err;
  console.log('Usuario creado con id ' + newUser.id);
});
//db.disconnect();
