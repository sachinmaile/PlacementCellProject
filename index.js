const express=require('express');
const path=require('path');
const port=8000;
const db=require('./config/mongoose');
const app=express();
const expressLayouts=require('express-ejs-layouts');

app.use(expressLayouts);

app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.listen(port,function(err){
    if(err) console.log("Error in running the server",err);
    console.log('Yup! My Express server is running on port:'+port);
})