const Donaciones = require('../models/donaciones.model');

const ConsultarDonaciones = async (req, res) => {
    try {
 
        const donaciones = await Donaciones.find();

        return res.status(200).json({ donaciones });
    } catch (error) {
        return res.status(500).json({ mensaje: 'Error en la petición' });
    }
};


const CrearDonacion = (req, res) => {

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