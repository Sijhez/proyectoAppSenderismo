const express = require('express')
const router = express.Router()
const routesController = require('./../controllers/routesController')

//read all routes
router.get('/allRoutes', routesController.viewAllRoutes)
//get one route
router.get('/:routeID', routesController.getSingleRoute)

module.exports = router