{
    let createStudent=function (){
        let newStudentForm=$('#create-student');
        newStudentForm.submit(function(e){
            e.preventDefault();
            $.ajax({
                type:'post',
                url:'/student/create',
                data:newStudentForm.serialize(),
                success:function(data){
                    // let newStudent=newStudentDom(data.data.student);
                    // $('#posts-list-container>ul').prepend(newStudent);
                    // deletePost($('  .delete-post-button',newStudent));
                    console.log(data);
                },
                error:function(error){console.log(error.responseText);}
            })
        })
    }
    // let newStudentDom=function(student){
    //     return $(`
    //         <li id="student-${student._id}">
    //             <p>
    //                 ${ post.content } <br>
    //                 <small> ${ post.user.name } </small>
    //                 <small> <a href="/posts/destroy/${ post._id }">Delete</a> S/small>
    //             </p>
            
    //             <div class="post-comments">
    //                 <form action="/comments/create" method="POST">
    //                     <input type="text" name="content" placeholder="Type Here" required>
    //                     <input type="hidden" name="post" value="${ post._id }">
    //                     <input type="submit" value="Add Comment">
    //                 </form>
    //                 <div class="post-comments-list">
    //                     <ul id="post-comments-${ post._id }"></ul>
    //                 </div>
    //             </div>
    //         </li>
    //     `);
    // }
    createStudent();
}

// let deletePost=function(deleteLink){
//     $(deleteLink).click(function(e){
//         e.preventDefault();
//         $.ajax({
//             type:'get',
//             url:$(deleteLink).prop('href'),
//             success:function(data){
//                 $(`#post-${data.data.post_id}`).remove();
//             },
//             error:function(error){console.log(error.responseText);}
//         })
//     })
// }