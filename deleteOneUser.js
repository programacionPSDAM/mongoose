var User = require('./user.js').User;

User.findOneAndRemove ({first_name : 'Joaquin'}, function (err){
  if (err) throw err;
  console.log('Usuario borrado');
})
