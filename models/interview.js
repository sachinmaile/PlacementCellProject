const mongoose=require('mongoose');

const interviewSchema=new mongoose.Schema({
    company:{type:String,required:true},
    date:{type:Date,required:true},
    CTC:{type:String,required:true},
    result: {
        type: String,
        enum: ['On Hold', 'Selected', 'Pending', 'Not Selected', 'Did not Attempt'],
    },
},{timestamp:true});

const Interview=mongoose.model('Interview',interviewSchema);
module.exports=Interview;