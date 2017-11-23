var User = require('./user.js').User;

User.update({first_name : /^M/} ,{last_name : 'Apellido cambiado'},
            { multi : true } , function(err, data){
                if (err) throw err;
                console.log(data);
});
