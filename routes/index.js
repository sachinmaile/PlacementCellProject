const express=require('express');
const router=express.Router();

const homeController=require('../controllers/home_controller');
console.log('router loaded');
router.get('/',homeController.home);

router.use('/emp',require('./employee'));
router.use('/student',require('./student'));
router.use('/interview',require('./interview'))

module.exports=router;