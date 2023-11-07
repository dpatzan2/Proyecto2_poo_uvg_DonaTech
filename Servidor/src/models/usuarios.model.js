const mongoose = require('mongoose');

var Schema=mongoose.Schema;

var usuariosSchema = Schema({
    nombre: String,
    apellido: String,
    password: String,
    rol: String,    
    usuario: String,
})

module.exports=mongoose.model('usuarios',usuariosSchema)