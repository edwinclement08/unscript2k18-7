var express = require('express');
var router = express.Router();
var Student = require("./model/student"),


router.get("/student",function(req,res){

	Student.find({},function(err,data){
		res.end(data);
	});

});



module.exports = router;
