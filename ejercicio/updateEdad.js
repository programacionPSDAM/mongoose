var Humano = require('./humano').Humano;

Humano.update({id : 2000}, {edad : 800}, {multi : true},
   function(err, data){
      if (err) throw err;
      console.log('Usuario actualizado');
})
