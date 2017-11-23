var User = require('./user.js').User;

User.find({}, function(err, users){
  if (err) throw err;
  console.log(users);
})
