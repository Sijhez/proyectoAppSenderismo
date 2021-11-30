const Route = require("./../models/Route")

exports.viewAllRoutes = async(req, res)=>{
    const allRoutes = await Route.find({})

  res.render("users/allRoutes", {
      data: allRoutes
  })
}