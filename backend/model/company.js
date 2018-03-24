var mongoose = require("mongoose");


var company = new mongoose.Schema({
	name:String,
	jobProfile:String,
	desc:String,
	minCrit:{
		grade:String,
		maxKt:String
	}
 });


module.exports = mongoose.model("Company" , company);
