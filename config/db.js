// ./config/db.js
const mongoose = require("mongoose")

const connectDB = async () => {
	await mongoose.connect('mongodb+srv://Sinuhe:Sijhez-29@ironhack.b4qtr.mongodb.net/senderismo', {
		useNewUrlParser: true,
		useUnifiedTopology: true  
	}) 

	console.log("Base de datos conectada")

}

module.exports = connectDB