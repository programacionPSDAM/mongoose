var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/ejercicio');
var Schema = mongoose.Schema;

var humanoSchema = new Schema ({
  id     : Number,
  sexo   : String,
  edad   : Number,
  nombre : String,
  fecha  : {type : Date, default : Date.now}
});

var Humano = mongoose.model('Humanos', humanoSchema);

module.exports.Humano=Humano;
