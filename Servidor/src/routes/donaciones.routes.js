const express = require('express');
const donacionesController = require('../controllers/donaciones.controller');
const md_autenticacion = require('../middlewares/autenticacion');

const api = express.Router();

api.get('/consultarDonaciones',  md_autenticacion.Auth, donacionesController.ConsultarDonaciones);
api.post('/crearDonacion', md_autenticacion.Auth, donacionesController.CrearDonacion);
api.put('/editarDonacion/:idDonacion', md_autenticacion.Auth, donacionesController.EditarDonacion);
api.delete('/eliminarDonacion/:idDonacion', md_autenticacion.Auth, donacionesController.EliminarDonacion);
api.get('/donacionPorId', md_autenticacion.Auth, donacionesController.ConsultarDonacionesById);

module.exports = api; 