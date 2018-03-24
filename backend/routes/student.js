var express = require('express');
var router = express.Router();
var Student = require("../model/student");

router.get("/student",function(req,res){

	Student.find({},function(err,data){
		console.log(data);
		res.json(data);
	});
	// res.end("fss");
	
});


router.get("student/:id",function(req,res){

	Student.findById(req.params.id,(err,data)=>{
		res.json(data);
	});
});

module.exports = router;
