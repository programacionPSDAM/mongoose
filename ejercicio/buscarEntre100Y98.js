var Humano = require('./humano').Humano;

Humano.find({edad : {$lt : 100, $gt : 98}}, function(err,humanos){
  if (err) throw err;
  console.log(humanos);
});
