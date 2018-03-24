var express = require("express"),
    router = express.Router(),
    passport = require("passport"),
    Student = require("../model/student");
    

router.get("/login",function(req,res){

    res.render("login" , {signup : "none",login:"block",title : "Login"});

});

router.post('/signup', (req,res,next)=>{
    passport.authenticate('local-signup',(err,user,info)=>{

            if (err) { return res.json(info);; }
            if (!user) { return res.json(info); }
            req.logIn(user, function(err) {
                if (err) { return next(err); }
                return res.json(info);;
              });
          })(req, res, next);
            
    }); 

router.post('/login', passport.authenticate('local-login'));

router.get("/logout",function(req,res){
	req.logout();
	res.redirect("/");
});


module.exports = router;