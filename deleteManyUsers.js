var User = require('./user.js').User;

User.remove ({first_name : /^M/}, function (err){
  if (err) throw err;
  console.log('Usuarios borrados');
})
