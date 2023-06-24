const mongoose=require('mongoose');

const studentSchema=new mongoose.Schema({
    id:{type:Number,required:true,unique:true},
    name:{type:String,required:true},
    college:{type:String,required:true},
    status:{type:String,required:true}
},{timestamp:true});

const Student=mongoose.model('Student',employeeSchema);
module.exports=Student;