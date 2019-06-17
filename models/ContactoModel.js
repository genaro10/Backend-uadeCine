var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var contactoSchema = new Schema({
    idUsuario:String, //para luego machearlo con los comentarios que el usuario genere.
    dni:String,
    nombre:String,
    apellido: String,
    mail: String,
    contraseña: String
});

var Contactos = mongoose.model('Usuarios', contactoSchema); //nombre que recibirá mi tabla
console.log("se creo modelo");
module.exports = Contactos;