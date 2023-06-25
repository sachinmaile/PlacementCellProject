const express=require('express');
const router=express.Router();
const empController=require('../controllers/emp_controller');
const passport = require('passport');

router.get('/signUp',empController.signUp);
router.get('/signUp',empController.signUp);
router.get('/signIn',empController.signIn);
router.post('/create',empController.create);
router.post('/create_session',passport.authenticate('local',{failureRedirect:'emp/signIn'}),empController.createSession);
router.get('/profile',passport.checkAuthentication,empController.profile);
router.get('/signOut',empController.destroySession);

module.exports=router;   