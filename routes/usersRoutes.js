const express = require('express')
const { route } = require('.')
const router = express.Router()
const routesController = require('./../controllers/routesController')

router.get('/allRoutes', routesController.viewAllRoutes)

module.exports = router