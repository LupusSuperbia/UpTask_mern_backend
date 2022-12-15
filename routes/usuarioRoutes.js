import express from "express";
const router = express.Router();

import {registrar, autenticar, confirmar, olvidePassword, comprobarToken, nuevoPassword, perfil} from '../controllers/usuarioController.js'


import checkAuth from '../middleware/checkAuth.js'

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ //
// -------------------------------------------------------- A R E A P U B L I C A ------------------------------------------------------------------------------------------//
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ //
// Creacion, Registro y Confirmación de Usuarios
router.post('/', registrar) // Creando nuevo Usuario
router.post('/login', autenticar) //  Usuario
router.get('/confirmar/:token', confirmar) // Confirmar atraves de token
router.post('/olvide-password', olvidePassword)
// Esto se usa cuando usamos la misma url para dos diferentes funciones de controlador
router.route('/olvide-password/:token').get(comprobarToken).post(nuevoPassword)

// Check auth va a funcionar como metodo de seguridad para ver si esta autenticado
router.get('/perfil', checkAuth, perfil)
export default router