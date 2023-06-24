const mongoose=require('mongoose');

const interviewSchema=new mongoose.Schema({
    company:{type:String,required:true},
    date:{type:Date,required:true},
    CTC:{type:String,required:true}
},{timestamp:true});

const Interview=mongoose.model('Interview',interviewSchema);
module.exports=Interview;