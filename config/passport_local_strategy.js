const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;
const Employee=require('../models/employee');

passport.use(new LocalStrategy({ usernameField:'email' },
    async (email,password,done)=>{
        await Employee.findOne({email:email})
        .then((emp)=>{
            if(!emp || emp.password!=password){
                console.log('Invalid username/password');
                return done(null,false);
            }
            else {
                return done(null,emp);
            }
        })
        .catch((err)=>{
            if(err){
                console.log('Error in finding emp-->passport');
                return done(err);
            }
        })
    } 
));

//Seriallizing the user to decide which key is to kept in the cookies
passport.serializeUser(async (emp,done)=>{
    await done(null,emp.id);
})

//deserializing the user from the key in the cookies
passport.deserializeUser(async (id,done)=>{
    await Employee.findById(id)
    .then((emp)=>{
        return done(null,emp);
    })
    .catch((err)=>{
        console.log('Error in finding user-->passport');
        return done(err);
    })
});

passport.checkAuthentication=function(req,res,next){
    if(req.isAuthenticated()) return next();
    return res.redirect('/emp/signIn');
}

passport.setAuthenticatedUser=function(req,res,next){
    if(req.isAuthenticated()) res.locals.emp=req.emp;
    next();
}

module.exports=passport;