var User = require('./user.js').User;

User.find({first_name : /^M/, id : { $gt : 800}}, function(err, users){
  if (err) throw err;
  console.log(users);
})
