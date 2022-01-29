const Route = require("./../models/Route")

//READ ROUTE- VIEWS
exports.viewAllRoutes = async(req, res)=>{
    const allRoutes = await Route.find({}).populate('owner')
     
  res.render("createdRoutes/allRoutes", {
      data: allRoutes
  })
}

exports.getSingleRoute = async(req,res) =>{
   
  const singleRouteID = req.params.routeID
    const getSingleRoute = await Route.findById(singleRouteID).populate('owner')

    if(req.session.currentUser){
      if(req.session.currentUser.username === getSingleRoute.postedBy){
        res.render("createdRoutes/singleRoute",{
          data:{getSingleRoute,
          creado:true}
        });
        
      }else{
        res.render("createdRoutes/singleRoute",{
          data:{getSingleRoute}
        })
      }
      console.log(getSingleRoute)
    }else{
      res.render("createdRoutes/singleRoute",{
        data:{getSingleRoute}
      })
    }
    
    
}

