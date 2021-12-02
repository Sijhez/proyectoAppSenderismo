
// ./routes/users.js
// 1. IMPORTACION
const express		= require("express")
const router		= express.Router()
const usersController	= require("./../controllers/usersController")
const routeGuard	= require("./../middlewares/route-guard")

console.log("El routeguard importado es:", routeGuard.usuarioLoggeado)

// 2. RUTEO

/* router.get("/profile", routeGuard.usuarioLoggeado, usersController.profile) */

router.get("/create", routeGuard.usuarioLoggeado, usersController.viewProfile)
router.post("/create",routeGuard.usuarioLoggeado, usersController.createProfile)

router.get("/profile", usersController.getProfile)

router.get("/:profileID/edit", routeGuard.usuarioLoggeado, usersController.viewEditProfile)

router.post("/:profileID/edit",routeGuard.usuarioLoggeado, usersController.editProfile)

router.post("/:profileID/delete",routeGuard.usuarioLoggeado, usersController.deleteProfile)


/* router.get("/profile", usersController.getProfileId) */


module.exports = router


