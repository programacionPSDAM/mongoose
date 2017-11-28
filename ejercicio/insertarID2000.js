var Humano = require('./humano').Humano;

var newHumano = Humano ({
  id : 2000,
  sexo : 'Male',
  edad : 120,
  nombre : 'Felipe García'
});
//console.log(newHumano);
newHumano.save(function(err) {
  if (err) throw err;
  console.log("usuario creado con " + newHumano.id);
});
