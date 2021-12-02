const Route = require("./../models/Route")

//READ ROUTE- VIEWS
exports.viewAllRoutes = async(req, res)=>{
    const allRoutes = await Route.find({})

  res.render("createdRoutes/allRoutes", {
      data: allRoutes
  })
}

exports.getSingleRoute = async(req,res) =>{
   
  const singleRouteID = req.params.routeID
    const getSingleRoute = await Route.findById(singleRouteID)
    
    res.render("createdRoutes/singleRoute",{
      data:getSingleRoute
    })
}