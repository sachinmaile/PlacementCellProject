const mongoose=require('mongoose');

const studentSchema=new mongoose.Schema({
    id:{type:Number,required:true,unique:true},
    name:{type:String,required:true},
    college:{type:String,required:true},
    batch:{type:Number,required:true},
    status:{type:String,required:true},
    DSAFinalScore:{type:Number,required:true},
    WebDFinalScore:{type:Number,required:true},
    ReactFinalScore:{type:Number,required:true},
    interviews: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Interview',
    }
},{timestamp:true});

const Student=mongoose.model('Student',studentSchema);
module.exports=Student;