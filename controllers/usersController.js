// ./controllers/usersController.js
const Perfil   = require('./../models/Perfil')

exports.profile = async (req,res) => {
	res.render("users/profile")

}

exports.perfil = async (req, res) => {
	
	console.log(req.body)

	const photo = req.body.photo     
	const nombre = req.body.nombre     
	const apellido = req.body.apellido     
	const usuario = req.body.usuario     
	const edad = req.body.edad     
    const pais = req.body.pais     
    const nivel = req.body.nivel  
	
	 
	try {
		const newperfil = await Perfil.create({
			photo,
			nombre,
			apellido,
			usuario,
			edad,
			pais,
			nivel
			})
		
			console.log(newperfil)
		
			res.send('perfilcreado')
		
	} catch (error) {
		console.log(error)	
	}
}
