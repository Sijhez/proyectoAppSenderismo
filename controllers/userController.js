const Route = require('./../models/Route')

// exports.profile = async(req, res)=>{
//     res.render('users/userProfile')
// }

exports.profile = async (req,res) => {

	res.render("users/profile")

}

exports.createRouteView = async(req, res)=>{
    res.render('users/myRoute')
}

exports.createUserRoute = async (req, res)=>{
    
    const title = req.body.title
    const state = req.body.state
    const altitude = req.body.altitude
    const lodging = req.body.lodging
    const magicTown = req.body.magicTown
    const hardness = req.body.hardness
    const description = req.body.description
    const imgUrl = req.body.imgUrl
    
     const newRouteCreated = await Route.create({title, state, altitude, lodging, magicTown, hardness, description, imgUrl})
    //console.log("nueva ruta en DB:", newRouteCreated)

    res.redirect('/users/allRoutes')
}




