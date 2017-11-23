var User = require('./user.js').User;

User.find({first_name: 'joaquín'}, function(err, users){
  if (err) throw err;
  console.log(users);
});
