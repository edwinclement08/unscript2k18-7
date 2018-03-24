var mongoose = require("mongoose");


var company = new mongoose.Schema({
	name:String,
	jobProfile:String,
	desc:String,
	minCrit:{
		grade:String,
		maxKt:String
	},
	event:[
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Event"
		}
	]
 });


module.exports = mongoose.model("Company" , company);
