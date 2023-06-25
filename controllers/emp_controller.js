const Employee=require('../models/employee');
const Student=require('../models/student');
const fs = require('fs');
// const fastcsv = require('fast-csv');

module.exports.signUp=function (req,res){
    if(req.isAuthenticated()){ return res.redirect('/emp/profile'); }
    return res.render('emp_sign_up',{title:'Employee SignUp'});
}

module.exports.signIn=function (req,res){
    return res.render('emp_sign_in',{title:'Employee SignIn'});
}

module.exports.create=async (req,res)=>{
    if(req.body.password!=req.body.confirm_password){
        return res.redirect('back');
    }
    await Employee.findOne({email:req.body.email})
    .then((emp)=>{
        if(!emp){
            Employee.create(req.body)
            .then(()=>{
                return res.redirect('/emp/signIn');
            })
            .catch((err)=>{
                console.log('Error in creating employee while signing up');
                return;
            });
        }
        else{
            return res.redirect('back');
        }
    })
    .catch((err)=>{
        console.log('Error in fetching employee in signing up');
        return;
    });
}

module.exports.createSession=async (req,res)=>{
    // await Employee.findOne({email:req.body.email})
    // .then((emp)=>{
    //     if(emp){
    //         if(emp.password!=req.body.password){
    //             return  res.redirect('back');
    //         }
    //         res.cookie('emp_id',emp._id);
    //         return res.redirect('/emp/profile');
    //     }
    //     else{
    //         return res.redirect('back');
    //     }
    // })
    // .catch((err)=>{
    //         console.log('Error in finding emp in signing in');
    //         return;
    // })
    return res.redirect('/');
}

module.exports.profile= async (req,res)=>{
    if(req.cookies.emp_id){
        await Employee.findById(req.cookies.emp_id)
        .then((emp)=>{
            if(emp) return res.render('emp_profile',{title:'Employee Profile',emp:emp});
            else return res.redirect('/emp/signIn');
        })
        .catch((err)=>{
                console.log('Error in finding profile');
                return;
        })
    }
    else return res.redirect('/emp/signIn');
}

module.exports.destroySession=function(req,res){
    req.logout(function(err){
        if(err) console.log(err);
    });
    return res.redirect('/');
}

module.exports.downloadCsv = async function (req, res) {
	try {
		const students = await Student.find({});

		let data = '';
		let no = 1;
		let csv = 'S.No, Name, College, Status, Batch, DSA Score, WebDev Score, React Score, Interview, Date, Result';

		for (let student of students) {
			data =
				no +
				',' +
				student.name +
				',' +
				student.college +
				',' +
				student.status +
				',' +
				student.batch +
				',' +
				student.DSAFinalScore +
				',' +
				student.WebDFinalScore +
				',' +
				student.ReactFinalScore;

			// if (student.interviews.length > 0) {
				// for (let interview of student.interviews) {
				// 	data += ',' + interview.company + ',' + interview.date.toString() + ',' + interview.result;
				// }
			//}
			no++;
			csv += '\n' + data;
		}

		const dataFile = fs.writeFile('report/data.csv', csv, function (error, data) {
			if (error) {
				console.log(error);
				return res.redirect('back');
			}
			console.log('Report generated successfully');
			return res.download('report/data.csv');
		});
	} catch (error) {
		console.log(`Error in downloading file: ${error}`);
		return res.redirect('back');
	}
};