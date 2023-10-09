'use strict';


var express = require('express');
const cors = require('cors');
var app = express();

//IMPORTACIONES RUTAS
const rutaUsuario = require('./src/routes/usuario.routes');
// const rutasHabitaciones = require('./src/routes/habitaciones.routes');
// const rutasEventos = require('./src/routes/eventos.routes');
// const rutasReservaciones = require('./src/routes/reservaciones.routes');
// const rutaHoteles = require("./src/routes/hoteles.routes");
// const rutaServicios = require("./src/routes/servicios.routes");
// const rutaRegistros = require("./src/routes/registros.routes");
// const rutaReportes = require("./src/routes/reportes.routes");



//MIDDLEWARES
app.use(express.urlencoded({extended: false}));
app.use(express.json());


//CABECERAS
app.use(cors());

//CARGA DE RUTAS se realizaba como localhost:3000/api
app.use("/api", rutaUsuario);

module.exports = app; 