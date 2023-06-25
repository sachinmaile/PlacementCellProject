const Student=require('../models/student');
const Company = require('../models/company');

module.exports.addStudentsPage=async (req,res)=>{
    return res.render('add_student',{title:"Stduents Page"});
}

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
}

module.exports.deleteStudent = async function (req, res) {
	try {
		// find the student using id in params
		const student = await Student.findById(req.params);

		// find the companies for which interview is scheduled
		// and delete student from company interviews list
		if (student && student.interviews.length > 0) {
			for (let item of student.interviews) {
				const company = await Company.findOne({ name: item.company });
				if (company) {
					for (let i = 0; i < company.students.length; i++) {
						if (company.students[i].student.toString() === id) {
							company.students.splice(i, 1);
							company.save();
							break;
						}
					}
				}
			}
		}
		await Student.findByIdAndDelete(id);
		res.redirect('back');
	} catch (error) {
		console.log('Error in deleting student');
		return res.redirect('back');
	}
};