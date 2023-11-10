const Donaciones = require('../models/donaciones.model');




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
            return res.status(200).send({mensaje: "Donacion guardada exitosamente"})
        } else {
            return res.status(500).send({ mensaje: 'Faltan datos obligatorios'});
        }
    }catch(error){
        return res.status(500).send({ mensaje: 'Error en la peticion'});
    }
}

async function EditarDonacion(req, res) {
    try{
        const idDon = req.params.idDon;
        const params = req.body;

        const donacionExist = await Donaciones.findOne({id: idDon});
        if (!donacionExist) return res.status(400).send({mensaje: 'Donacion no encontrada'});

        const donaUpdate = await Donaciones.findOneAndUpdate({id: idDon}, params, {new: true});
        if (donaUpdate) return res.send({mensaje: 'Donacion actualizada', donaUpdate});
        return res.status(400).send({mensaje: 'Donacion no actualizada'});

    }catch(error){
        return res.status(500).send({mensaje: 'Error en la peticion'});
    }

}

async function EliminarDonacion(req, res){
    try{

        const idDon = req.params.id;
        const elimiDon = await Donaciones.findOneAndDelete({id: idDon});
        if (elimiDon) return res.send({mensaje: 'Donacion eliminada', elimiDon});
        return res.status(400).send({mensaje: 'Donacion no encontrada'});

    } catch(error) {
        return res.status(500).send({mensaje: 'Error en la peticion'})
    }

}

async function ConsultarDonacionesById(req, res){
    try{

        const idDon = req.params.id;
        const donaExist = await Donaciones.findOne({id: idDon});
        return res.send({mensaje: 'Donacion: ', donaExist});

    } catch(error) {
        return res.status(500).send({mensaje: 'Error obteniendo donacion'})
    }

}

module.exports = {
    ConsultarDonaciones,
    CrearDonacion,
    EditarDonacion,
    EliminarDonacion,
    ConsultarDonacionesById
}