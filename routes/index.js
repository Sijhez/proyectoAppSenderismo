//. routes/index.js

const express          = require('express')
const router           = express.Router()
const indexController  = require('./../controllers/indexController')


router.get('/', indexController.home)
router.get("/signup", indexController.viewRegister)

router.post("/signup", indexController.register)












module.exports = router