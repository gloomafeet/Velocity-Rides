const mongoose = require("mongoose");

module.exports = () => {
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
	try {
		mongoose.connect('mongodb+srv://samnbe28:projectvelPLSWORK@veocityrides.tndz4wn.mongodb.net/?retryWrites=true&w=majority&appName=VeocityRides', connectionParams).then(()=>{
			const db = mongoose.connection
			module.exports = db
		})
		console.log("Connected to database successfully");
	} catch (error) {
		console.log(error);
		console.log("Could not connect database!");
	}
};