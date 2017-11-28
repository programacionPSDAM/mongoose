var Humano = require('./humano').Humano;

Humano.find({edad : {$gt : 100}}, function(err,humanos){
  if (err) throw err;
  console.log('Nº de humanos con mas de 100 años '
                + humanos.length);
});
