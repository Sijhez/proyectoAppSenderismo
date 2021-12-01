//. routes/index.js

const express          = require('express')
const router           = express.Router()
const indexController  = require('./../controllers/indexController')
const routeGuard		= require("./../middlewares/route-guard")


router.get("/", indexController.home)

router.get("/signup",routeGuard.usuarioNoLoggeado, indexController.viewRegister)
router.post("/signup",routeGuard.usuarioNoLoggeado, indexController.register)

router.get("/login",routeGuard.usuarioNoLoggeado, indexController.viewLogin)
router.post("/login",routeGuard.usuarioNoLoggeado, indexController.login)

// CERRAR SESIÓN
router.get("/logout", routeGuard.usuarioLoggeado, indexController.logout)

module.exports = router
