'use strict';


var express = require('express');
const cors = require('cors');
var app = express();

//IMPORTACIONES RUTAS
const rutaUsuario = require('./src/routes/usuario.routes');
const rutaDonaciones = require('./src/routes/donaciones.routes');



//MIDDLEWARES
app.use(express.urlencoded({extended: false}));
app.use(express.json());


//CABECERAS
app.use(cors());

//CARGA DE RUTAS se realizaba como localhost:3000/api
app.use("/api", rutaUsuario, rutaDonaciones);

module.exports = app; 