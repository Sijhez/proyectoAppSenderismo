// ./controllers/indexController.js
const User		= require("./../models/User")
const bcryptjs = require("bcryptjs")

exports.home = async (req, res) => {
	res.render("home")
}

exports.viewRegister = (req, res) => {
	res.render("signup")
}

exports.register = async (req, res) => {	
	const username 	= req.body.username
	const email 	= req.body.email
	const password 	= req.body.password
	
	if(!username || !email || !password){
		res.render("signup", {
			errorMessage: "Uno o más campos están vacíos. Revísalos nuevamente."
		})
		return
	}

	
	const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/

	if(!regex.test(password)){
		
		res.render("signup", {
			errorMessage: "Tu password debe de contener 6 caracteres, mínimo un número y una mayúscula."
		})	
		return
	}

	// 2. ENCRIPTACIÓN DE PASSWORD 🚩🚩🚩

	try {
		const salt = await bcryptjs.genSalt(10)
		const passwordEncriptado = await bcryptjs.hash(password, salt)
		
		const newUser = await User.create({
			username,
			email,
			passwordEncriptado
		}) 

		console.log(newUser)
		
	
		res.redirect("/login")

	} catch (error) {

		console.log(error)
		res.status(500).render("signup", {
			errorMessage: "Hubo un error con la validez de tu correo. Intenta nuevamente. No dejes espacios y usa minúsculas."
		})
	}
}
