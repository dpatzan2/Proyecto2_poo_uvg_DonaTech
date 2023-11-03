const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var donacionesSchema = Schema({
    Descripcion: String,
    FechaDonacion: Date,
    idDonante: {type: Schema.Types.ObjectId, ref: "usuarios"},
    idBeneficiario: {type: Schema.Types.ObjectId, ref: "usuarios"},
    Estado: String,
});

module.exports = mongoose.model('donaciones', donacionesSchema);