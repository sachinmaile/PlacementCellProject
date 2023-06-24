const Student=require('../models/student');

module.exports.home=async (req,res)=>{
    try{
        // populate the user of each post
       let student = await Student.find({}).sort('-createdAt');

       return res.render('home', {
           title: "Placement Cell | Home",
           student:student
       });

   }catch(err){
       console.log('Error', err);
       return;
   }
}