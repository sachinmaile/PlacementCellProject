const express=require('express');
const router=express.Router();
const studentController=require('../controllers/student_controller');
const passport = require('passport');

router.get('/addStudentsPage',studentController.addStudentsPage);
router.post('/create',studentController.create);
router.get('/profile/:id',studentController.profile);
router.get('/delete/:id',studentController.deleteStudent);

module.exports=router;