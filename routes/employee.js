const express=require('express');
const router=express.Router();
const empController=require('../controllers/emp_controller');

router.get('/signUp',empController.signUp);
router.get('/signIn',empController.signIn);
router.post('/create',empController.create);
router.post('/create_session',empController.createSession);
router.get('/profile',empController.profile)

module.exports=router;