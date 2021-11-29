// ./config/db.js

const mongoose = require("mongoose")

const connectDB = async () => {
	await mongoose.connect("mongodb://localhost:27017/senderismo", {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})

	console.log("Base de datos conectada")

}

module.exports = connectDB