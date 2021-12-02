// ./controllers/usersController.js
const Perfil   = require('./../models/Perfil')

/* exports.profile = async (req,res) => {
	res.render("users/profile")

} */

exports.getProfile = async (req, res) => {
	const idUsuario = req.session.currentUser._id
	const profileCreate = await Perfil.findOne({idUsuario})

		res.render("users/profile", {
		data: profileCreate
	})
}

/* exports.getProfileId = async (req, res) => {

	const singleProfileID = req.params.perfilID

	const getTheProfile = await Perfil.findById(singleProfileID)

	console.log(getTheBook)

	res.render("users/profile", {
		data: getTheProfile
	})
} */


exports.viewProfile = async (req,res) => {
	
	res.render("users/create")

}

exports.createProfile = async (req, res) => {
	
	console.log(req.body)

	const photo    = req.body.photo     
	const nombre   = req.body.nombre     
	const apellido = req.body.apellido     
	const usuario  = req.body.usuario     
	const edad     = req.body.edad     
    const pais     = req.body.pais     
    const nivel    = req.body.nivel  
    const idUsuario= req.session.currentUser._id  
	
	 
	const newperfil = await Perfil.create({
			photo,
			nombre,
			apellido,
			usuario,
			edad,
			pais,
			nivel,
			idUsuario 
			})
		
			//console.log(newperfil)
		
			res.redirect('/users/profile',)	
	}


	exports.viewEditProfile = async (req, res) => {

		console.log(req.params)
	
		const profileID = req.params.profileID
	
		const foundProfile = await Perfil.findById(profileID)
	
		res.render("users/edit", {
			data: foundProfile
		})
	
	}

	exports.editProfile = async (req, res) => {
		const profileID = req.params.profileID
		const photo    = req.body.photo     
		const nombre   = req.body.nombre     
		const apellido = req.body.apellido     
		const usuario  = req.body.usuario     
		const edad     = req.body.edad     
    	const pais     = req.body.pais     
    	const nivel    = req.body.nivel 
    	const idUsuario    = req.session.currentUser._id  
		
		console.log(req.params)
		
		const updatedProfile = await Perfil.findByIdAndUpdate(
			
			profileID,
			{photo, nombre, apellido, usuario, edad, pais, nivel,idUsuario },
			{new: true}
		)
	
		
	
		res.redirect(`/users/profile`)
	
	}


	exports.deleteProfile = async (req, res) => {

		// 1. IDENTIFICAR EL LIBRO QUE QUIERO BORRAR
		const profileID = req.params.profileID
	
		// 2. REALIZAMOS BORRADO EN BASE DE DATOS
		const deletedProfile = await Perfil.findByIdAndDelete(profileID)
	
		console.log("Borrado de Perfil:", deletedProfile)
	
		// 3. REDIRECCIÓN
		res.redirect("/users/profile")
	
	
	}




