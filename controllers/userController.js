const Route = require('./../models/Route')

// exports.profile = async(req, res)=>{
//     res.render('users/userProfile')
// }

exports.profile = async (req,res) => {

	res.render("users/profile")

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
    
     const newRouteCreated = await Route.create({title, state, town, altitude, lodging, magicTown, hardness, description, imgUrl})
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

