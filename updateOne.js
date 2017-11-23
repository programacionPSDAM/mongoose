var User = require('./user.js').User;

User.findOneAndUpdate({first_name : 'joaquin'} ,{first_name : 'Joaquin'},
            { new : true } , function(err, user){
                if (err) throw err;
                console.log(user);
});
