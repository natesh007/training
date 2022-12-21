$().ready(function() {
    // validate student-form on keyup and submit
    $("#studentForm").validate({
        rules: {
            fname:"required",
            lname:"required",
            required: true,
            minlength:3
        },
        email: {
            required:true,
            email:true,
        },
        mobilenumber: {
            required:true,
            minlength10

        },
        
        messages: {
        fname:"Please enter your firstname",
        lname:"Please enter your lastname",
        }
    })
   
})