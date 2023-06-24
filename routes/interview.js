const express=require('express');
const router=express.Router();
const interviewController=require('../controllers/interview_controller');
const passport = require('passport');

router.post('/add',interviewController.add);
router.get('/profile/:id',interviewController.profile);
router.get('/allInterviews',interviewController.allInterviews);

module.exports=router;