var Humano = require('./humano').Humano;

Humano.find({edad : {$lt : 18}, nombre : /^A/}, function(err,humanos){
  if (err) throw err;
  for (var i = 0; i < humanos.length; i++){
    console.log("Nombre %s con edad %d",
                humanos[i].nombre, humanos[i].edad);    
  }
});
