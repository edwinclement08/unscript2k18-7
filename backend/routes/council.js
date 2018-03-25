var express = require('express');
var router = express.Router();
var Council = require("../model/council");
/* GET home page. */
router.get('/council', function(req, res) {
    Council.find().populate("event").exec((err,foundEvent)=>{
        if(err)
            return res.json({sucess:true,msg:""});
        data = [];
        foundEvent.forEach((s)=>{
            s.password = null;
            data.push(s);
        });
        res.json(data);
    });
});

router.post("/council",(req,res)=>{
	var newCouncil =  new Council();

	newCouncil.name = req.body.name;
    newCouncil.email =  req.body.email;
    newCouncil.member = JSON.parse(req.body.member);
	newStudent.password = newStudent.generateHash(password);
	
	newStudent.save(function(err){
		if(err)
			return res.json({sucess:false,msg:""});
			res.json({sucess:true,msg:"Sucessful"});
	});

});

module.exports = router;
