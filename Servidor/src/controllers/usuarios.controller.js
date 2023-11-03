const Usuario = require('../models/usuarios.model');

const bcrypt = require('bcrypt');
const jwt = require('../services/jwt');

async function Registrar(req, res) {
    try {
        const parametros = req.body;

        if (parametros.nombre && parametros.apellido && parametros.email && parametros.password) {
            const usuarioEncontrado = await Usuario.find({ email: parametros.email });

            if (usuarioEncontrado.length === 0) {
                const passwordEncriptada = await bcrypt.hash(parametros.password, 10); // Use an appropriate number of rounds for hashing.

                const usuarioModel = new Usuario({
                    nombre: parametros.nombre,
                    apellido: parametros.apellido,
                    email: parametros.email,
                    rol: 'USUARIO',
                    imagen: null,
                    totalCarrito: 0,
                    password: passwordEncriptada,
                });

                const usuarioGuardado = await usuarioModel.save();

                if (!usuarioGuardado) {
                    return res.status(500).send({ mensaje: 'Error al agregar el Usuario' });
                }

                return res.status(200).send({ usuario: usuarioGuardado });
            } else {
                return res.status(500).send({ mensaje: 'Este correo ya se encuentra utilizado' });
            }
        } else {
            return res.status(500).send({ mensaje: 'Faltan datos obligatorios' });
        }
    } catch (error) {
        return res.status(500).send({ mensaje: 'Error en la petición' });
    }
}

async function Login(req, res) {
    try {
        const parametros = req.body;
        const usuarioEncontrado = await Usuario.findOne({ usuario: parametros.usuario });

        if (!usuarioEncontrado) {
            return res.status(500).send({ mensaje: 'Error, el correo no se encuentra registrado.' });
        }

        // COMPARO CONTRASENA SIN ENCRIPTAR CON LA ENCRIPTADA
        const verificacionPassword = await bcrypt.compare(parametros.password, usuarioEncontrado.password);

        if (verificacionPassword) {
            if (parametros.obtenerToken === 'true') {
                return res.status(200).send({ token: jwt.crearToken(usuarioEncontrado) });
            } else {
                usuarioEncontrado.password = undefined;
                return res.status(200).send({ usuario: usuarioEncontrado });
            }
        } else {
            return res.status(500).send({ mensaje: 'La contraseña no coincide' });
        }
    } catch (error) {
        return res.status(500).send({ mensaje: 'Error en la petición' });
    }
}


async function EditarUsuario(req, res) {
    try {
        const idUser = req.params.idUsuario;
        const parametros = req.body;

        if (idUser !== req.user.sub) {
            return res.status(500).send({ mensaje: 'No puede editar otros usuarios' });
        }

        const usuarioActualizado = await Usuario.findByIdAndUpdate(req.user.sub, parametros, { new: true });

        if (!usuarioActualizado) {
            return res.status(500).send({ mensaje: 'Error al editar el Usuario' });
        }

        return res.status(200).send({ usuario: usuarioActualizado });
    } catch (error) {
        return res.status(500).send({ mensaje: 'Error en la petición' });
    }
}

async function registarAdminDefecto(req, res) {
    var usuarioModelo = new Usuario();
    usuarioModelo.nombre = 'SuperAdmin';
    usuarioModelo.usuario = 'SuperAdmin';
    usuarioModelo.rol = 'ROL_ADMINISTRADOR';
    
    try {
        const usuarioGuardado = await Usuario.findOne({ nombre: 'SuperAdmin' });

        if (!usuarioGuardado) {
            const passwordEncrypt = await bcrypt.hash('123456', 10, null);
            usuarioModelo.password = passwordEncrypt;
            await usuarioModelo.save();
            console.log('Usuario administrador creado');
        } else {
            console.log('El usuario administrador ya existe');
        }
    } catch (err) {
        console.error('Error al registrar usuario administrador:', err);
    }
}

  


module.exports = {
    Registrar,
    Login,
    EditarUsuario,
    registarAdminDefecto
}