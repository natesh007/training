
function showdetails(radiovalue) {
    var clgdetails = document.getElementById("form-show");
    var presenteducation = document.getElementById("show-education");
    if (radiovalue.value === "yes") {
        clgdetails.style.display = "block"
        presenteducation.style.display = "none"
    }
    else {
        clgdetails.style.display = "none"
        presenteducation.style.display = "block"
    }
}




jQuery.validator.addMethod("alphabetsonly", function (value, element) {

    return this.optional(element) || /^[a-z\s]+$/i.test(value);

});



$().ready(function () {

    $("#studentForm").validate({
        rules: {
            fname: {
                required: true,
                alphabetsonly: true,

            },
            lname: {
                required: true,
                alphabetsonly: true,

            },
            email: {
                required: true,
                email: true,

            },
            mobilenumber: {
                required: true,
                minlength: 10,
                maxlength: 10,
                digits: true,

            },
            inlineRadioOptions: {
                required: true,

            },
            colName: {
                required: true,
                alphabetsonly: true,



            },
            startyear: {
                required: true,
                digits: true,
                minlength: 4,
                maxlength: 4,



            },
            endYear: {
                required: true,
                digits: true,
                minlength: 4,
                maxlength: 4,

            },
            CourseName: {
                required: true,
                alphabetsonly: true,


            },
            messages: {
                fname: {
                    required: 'Please Enter Your First Name',
                    alphabetsonly: "Please Enter Alphabets Only",
                },
                lname: {
                    required: 'Please Enter Your Last Name',
                    alphabetsonly: "Please Enter Alphabets Only",
                },
                email: {
                    required: 'Please Enter Your Email Id',
                },
                mobilenumber: {
                    required: 'Please Enter Your Mobile Number',
                },
                inlineRadioOptions: {
                    required: 'Please Select any one Option',
                },
                colName: {
                    required: 'Please Enter Your College Name',
                    alphabetsonly: "Please Enter Alphabets Only",


                },
                startyear: {
                    required: 'Please Enter Your Start Year',

                },
                endYear: {
                    required: 'Please Enter Your End Year',

                },
                CourseName: {
                    required: 'Please Enter Your Course Name',
                    alphabetsonly: "Please Enter Alphabets Only",


                },
            },
            errorPlacement:

                function (error, element) {

                    if (element.is(":radio")) {

                        // error append here

                        error.insertAfter('#btn-radio');

                    }

                    else {

                        error.insertAfter(element);

                    }

                },


        }
    })
})
