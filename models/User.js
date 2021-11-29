// ./models/User.js

// 1. IMPORTACIONES
const mongoose = require("mongoose")

// 2. SCHEMA

const userSchema = mongoose.Schema({
	username: String,
	email: {
		type: String,
		required: [true, "Email es requerido."], 
		match: [/^\S+@\S+\.\S+$/, "Por favor, ingresa un email válido."], 
		unique: true, 
		lowercase: true, 
		trim: true 
	},
	passwordEncriptado: String
})

// 3. MODELO
const User = mongoose.model("User", userSchema)

// 4. EXPORTACIÓN
module.exports = User 