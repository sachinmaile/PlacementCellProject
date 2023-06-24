const express=require('express');
const router=express.Router();
const studentController=require('../controllers/student_controller');
const passport = require('passport');

router.post('/create',studentController.create);
router.get('/profile/:id',studentController.profile)

module.exports=router;