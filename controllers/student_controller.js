const Student=require('../models/student');

module.exports.create=async (req,res)=>{
    Student.create(req.body)
    .then(()=>{
        return res.redirect('back');
    })
    .catch((err)=>{
        console.log('Error in creating student');
        return;
    })
}

module.exports.profile=async (req,res)=>{
    try{
        // populate the user of each post
       let student = await Student.findById(req.params.id);

       return res.render('student_profile',{
            title:'Student Profile',
            student:student
        })

   }
   catch(err){
       console.log('Error', err);
       return;
   }
//    await User.findById(req.params.id)
//     .then((user)=>{
//         return res.render('user_profile',{
//             title:'User Profile',
//             profile_user:user
//         });
//     });
}