// ./models/User.js

// 1. IMPORTACIONES
const mongoose = require("mongoose")
const Route = require("./Route")

// 2. SCHEMA

const perfilSchema = mongoose.Schema({
	photo: String,
	nombre: String,
	apellido: String,
	usuario: String,
	edad: Number,
    pais: String,
    nivel: String,
	idUsuario: String,
	myPosts:[{type:mongoose.Schema.Types.ObjectId,ref:"Route"}]
},
{
	timestamps: true
})

// 3. MODELO
const Perfil = mongoose.model("Perfil", perfilSchema)

// 4. EXPORTACIÓN
module.exports = Perfil 