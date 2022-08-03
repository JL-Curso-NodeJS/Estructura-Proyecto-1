// RUTAS DE USUARIOS

const router = require("express").Router(); // importar express.Router()

const usuarioController = require('../controllers/usuario.controller') // importar el archivo de controladores de usuarios


router.get('/prueba', usuarioController.prueba)
router.get('/', usuarioController.listar)
router.post('/', usuarioController.crear)
router.get('/:idUsuario', usuarioController.listarInfo)



module.exports = router;