
// ./routes/users.js
// 1. IMPORTACION
const express		= require("express")
const router		= express.Router()
const usersController	= require("./../controllers/userController")

const routeGuard	= require("./../middlewares/route-guard")

console.log("El routeguard importado es:", routeGuard.usuarioLoggeado)

// 2. RUTEO

router.get("/profile", routeGuard.usuarioLoggeado, usersController.profile)

//create new Routes
router.get("/myRoute", routeGuard.usuarioLoggeado, usersController.createRouteView)
router.post("/myRoute", routeGuard.usuarioLoggeado, usersController.createUserRoute)


module.exports = router