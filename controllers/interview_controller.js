const Interview=require('../models/interview');

module.exports.add=async (req,res)=>{
    await Interview.create(req.body)
    .then(()=>{
        return res.redirect('back');
    })
    .catch((err)=>{
        console.log('Error in adding interview');
        return;
    })
}

module.exports.profile=async (req,res)=>{
    try{
        // populate the user of each post
       let interview = await Interview.findById(req.params.id);
       return res.render('company_details',{
            title:'All Company Details',
            interview:interview
        });
   }
   catch(err){
       console.log('Error', err);
       return;
   }
}

module.exports.allInterviews=async (req,res)=>{
    try{
        // populate the user of each post
       let interviews = await Interview.find({});

       return res.render('interviews_page', {
           title: "All Company Details",
           all_interviews:interviews
       });

   }catch(err){
       console.log('Error', err);
       return;
   }
}