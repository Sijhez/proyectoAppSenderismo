// ./controllers/usersController.js
const Perfil   = require('./../models/Perfil')
const Route = require('./../models/Route')


exports.getProfile = async (req, res) => {
	const idUsuario = req.session.currentUser._id
	const profileCreate = await Perfil.findOne({idUsuario})

		res.render("users/profile", {
		data: profileCreate
	})
}



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
   
    exports.getOneProfile = async(req, res) =>{
        const profileID = req.params.profileID
        const getOneUser = await Perfil.findById(profileID)
        res.render("users/userProfile",{
            data:getOneUser
        })
    }


//CREATE ROUTE- VIEWS
exports.createRouteView = async(req, res)=>{
    res.render('users/myRoute')
}

exports.createUserRoute = async (req, res)=>{
    
    const title = req.body.title
    const state = req.body.state
    const town = req.body.town
    const altitude = req.body.altitude
    const lodging = req.body.lodging
    const magicTown = req.body.magicTown
    const hardness = req.body.hardness
    const description = req.body.description
    const imgUrl = req.body.imgUrl
    const postedBy = req.session.currentUser.username
    
     const newRouteCreated = await Route.create({title, state, town, altitude, lodging, magicTown, hardness, description, imgUrl, postedBy})
    //console.log("nueva ruta en DB:", newRouteCreated)

    res.redirect('/createdRoutes/allRoutes')
}


//EDIT ROUTE- VIEWS
exports.viewEditUserRoute = async (req, res) =>{
   const singleRouteID = req.params.routeID
   const foundRoute = await Route.findById(singleRouteID)
    
   res.render('createdRoutes/editMyRoute',{
       data:foundRoute
   })
}

exports.editUserRoute = async (req, res) =>{
    const singleRouteID = req.params.routeID
    const title = req.body.title
    const state = req.body.state
    const altitude = req.body.altitude
    const lodging = req.body.lodging
    const magicTown = req.body.magicTown
    const hardness = req.body.hardness
    const description = req.body.description
    const imgUrl = req.body.imgUrl

    const updatedUserRoute = await Route.findByIdAndUpdate(
        singleRouteID,
        {title, state, altitude, lodging, magicTown, hardness, description, imgUrl},
        {new:true})
    res.redirect(`/createdRoutes/${updatedUserRoute._id}`)
 }
 

//DELETE ROUTE- VIEWS

exports.deleteUserRoute = async (req, res) =>{
    const singleRouteID = req.params.routeID
    
    const deletedSingleRoute = await Route.findByIdAndDelete(singleRouteID)
    console.log("Ruta eliminada:", deletedSingleRoute)
    res.redirect('/createdRoutes/allRoutes')
}

