const express = require('express')
const router = express.Router()
const userController = require('./../controllers/userController')

router.get('/userProfile', userController.profile)

//create new Routes
router.get("/myRoute", userController.createRouteView)
router.post("/myRoute", userController.createUserRoute)


module.exports = router
