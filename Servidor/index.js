const mongoose = require('mongoose');
const app = require('./app');
 var controllerUser = require('./src/controllers/usuarios.controller')
 require("dotenv").config();


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://0.0.0.0:27017/Proyecto2_DonaTech', {useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    console.log("Se encuentra conectado a la base de datos");

    controllerUser.registarAdminDefecto();
}).catch(err => console.log(err))

  const server = app.listen(3000, function () {
    console.log("Esta corriendo en el puerto 3000");
  });


