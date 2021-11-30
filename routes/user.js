const express = require('express')
const router = express.Router()
const userController = require('./../controllers/userController')

router.get('/userProfile', userController.profile)
router.get('/myRoute', userController.createRouteView)


module.exports = router
