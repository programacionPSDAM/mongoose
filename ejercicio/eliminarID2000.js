var Humano = require('./humano').Humano;

Humano.remove({id : 2000}, function(err,datos){
  if (err) throw err;
  console.log("Usuario eliminado");
})
