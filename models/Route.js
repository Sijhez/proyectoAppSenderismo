const mongoose = require("mongoose")
const routeSchema = mongoose.Schema({
    title:String,
    state:String,
    town: [String],
    altitude:Number,
    lodging:String,
    magicTown:String,
    hardness:Number,
    description:String,
    imgUrl:String
})

const Route = mongoose.model("Route", routeSchema)
module.exports = Route