// 1 Importaciones
const express         = require('express')
const app             = express()
const hbs             = require('hbs')
const connectDB       = require('./config/db')
const sessionManager = require("./config/session")


require('dotenv').config()

//2 Middlewares
sessionManager(app)

app.use(express.static("public"))



app.set("views", __dirname + "/views")
app.set("view engine", "hbs")

hbs.registerPartials(__dirname + "/views/partials")
app.use(express.urlencoded({ extended: true }))



connectDB()
// 3 Rutas
// LAYOUT MIDDLEWARE
app.use((req, res, next) => {
	res.locals.currentUser = req.session.currentUser
	next()
})


app.use("/users", require("./routes/users"))
app.use("/createdRoutes", require("./routes/usersRoutes"))
app.use("/createdRoutes", require("./routes/users"))
app.use("/", require("./routes/index"))
// 4 Servidor

app.listen(process.env.PORT, () => {
    console.log(`Servidor conectado en el puerto: http://localhost:${process.env.PORT}`)
})