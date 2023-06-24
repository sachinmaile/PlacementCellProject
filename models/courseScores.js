const mongoose=require('mongoose');

const courseScoresSchema=new mongoose.Schema({
    DSAFinalScore:{type:Number,required:true},
    WebDFinalScore:{type:Number,required:true},
    ReactFinalScore:{type:Number,required:true},
    student:{type:mongoose.Schema.Types.ObjectId,ref:'Student'}
},{timestamp:true});

const CourseScores=mongoose.model('CourseScores',courseScoresSchema);
module.exports=CourseScores;