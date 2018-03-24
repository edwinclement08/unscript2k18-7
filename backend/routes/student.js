var express = require('express');
var router = express.Router();
var Student = require("../model/student");

router.get("/student",function(req,res){

	Student.find({},function(err,data){
		console.log(data);
		
		res.end(JSON.stringify(data));
	});
	console.log("ets");
	
});



module.exports = router;
