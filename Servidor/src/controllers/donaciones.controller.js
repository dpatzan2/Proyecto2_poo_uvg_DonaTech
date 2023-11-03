const Donaciones = require('../models/donaciones.model');


const bcrypt = require('bcrypt-nodejs');
const jwt = require('../services/jwt');



const ConsultarDonaciones = async (req, res) => {
    try {
 
        const donaciones = await Donaciones.find();

        return res.status(200).json({ donaciones });
    } catch (error) {
        return res.status(500).json({ mensaje: 'Error en la petición' });
    }
};


const CrearDonacion = async (req, res) => {
    try{
        const parametros = req.body;

        if (parametros.Descripcion && parametros.FechaDonacion && parametros.idDonante && parametros.idBeneficiario && parametros.Estado){
            const donacionModel = new Donaciones({
                Descripcion: parametros.Descripcion,
                FechaDonacion: parametros.FechaDonacion,
                idDonante: parametros.idDonante,
                idBeneficiario: parametros.idBeneficiario,
                Estado: parametros.Estado,
            });

            const donacionGuardada = await donacionModel.save();

            if (!donacionGuardada){
                return res.status(500).send({mensaje: 'Error al agregar donacion'});
            }
        } else {
            return res.status(500).send({ mensaje: 'Faltan datos obligatorios'});
        }
    }catch(error){
        return res.status(500).send({ mensaje: 'Error en la peticion'});
    }
}

const EditarDonacion = (req, res) => {

}

const EliminarDonacion = (req, res) => {

}

const ConsultarDonacionesById = (req, res) => {

}

module.exports = {
    ConsultarDonaciones,
    CrearDonacion,
    EditarDonacion,
    EliminarDonacion,
    ConsultarDonacionesById
}