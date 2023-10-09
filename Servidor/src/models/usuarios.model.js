const mongoose = require('mongoose');

var Schema=mongoose.Schema;

var usuariosSchema = Schema({
    nombre: String,
    apellido: String,
    password: String,
    rol: String,    
    usuario: String,
    direccion:String,
    telefono:String,
    descripcion:String,
})

module.exports=mongoose.model('usuarios',usuariosSchema)