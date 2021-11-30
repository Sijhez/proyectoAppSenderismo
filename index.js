// 1 Importaciones
const express         = require('express')
const app             = express()
const hbs             = require('hbs')
const connectDB       = require('./config/db')

require('dotenv').config()

connectDB()
//2 Middlewares

app.use(express.static("public"))
app.set("views", __dirname + "/views")
app.set("view engine", "hbs")

hbs.registerPartials(__dirname + "/views/partials")
app.use(express.urlencoded({ extended: true }))


// 3 Rutas
//home
app.use("/", require("./routes/index"))

//users
app.use("/users", require("./routes/user"))

app.use("/users", require("./routes/usersRoutes"))

// 4 Servidor

app.listen(process.env.PORT, () => {
    console.log(`Servidor conectado en el puerto: http://localhost:${process.env.PORT}`)
})