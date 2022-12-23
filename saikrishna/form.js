// radio value details
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


// validation
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
            skills: {
                required: true,
                alphabetsonly: true,
            },
            skill: {
                required: true,
                alphabetsonly: true,
            },
            mytext_1: {
                required: true,
                alphabetsonly: true,

            },
            mytext_a: {
                required: true,
                alphabetsonly: true,

            }
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
            skills: {
                required: "Please Enter Your Skills",
                alphabetsonly: "Please Enter Alphabets Only",
            },
            skill: {
                required: "Please Add Your Skills",
                alphabetsonly: "Please Enter Alphabets Only",
            },
            mytext_1: {
                required: "Please Add Your Skills",
                alphabetsonly: "Please Enter Alphabets Only",

            },
            mytext_a: {
                required: "Please Add Your Skills",
                alphabetsonly: "Please Enter Alphabets Only",

            }

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
        submitHandler: function (form) {
            var newfnction = newcheck();
            if (newfnction != 1) {
                alert('Form  has been Submitted');
            }
        }



    })
})


function newcheck() {
    $('.errors').remove();
    var word = 0;
    var count = $('#SkillCount').val();
    for (let i = 1; i <= count; i++) {
        if ($('#mytext_' + i).val() == '' && $('#mytext_status_' + i).val() == '1') {
            $('<label class="errors">please fill the field</label>').insertAfter('#Skill_div_' + i);
            word = 1;
        }
    }
    return word;
}


function Addmore(num) {
    $('.error').remove();
    var str = num;
    var res = str.replace(/\D/g, "");
    var value = $('#mytext_' + res).val();

    var max_limit = 3;
    var limit = $("#SkillClick").val();

    if (value != '') {
        $('#add_btn_' + res).remove();

        if (limit < max_limit) {

            var newnumber = Number($('#SkillCount').val()) + Number(1);

            $('#SkillCount').val(newnumber);
            var newword = Number($('#SkillClick').val()) + 1;
            $('#SkillClick').val(newword);

            var newitem = '<div class="d-flex" id="Skill_div_' + newnumber + '"><input type="text" name="mytext_a" id="mytext_'
                + newnumber + '" placeholder="Add skills" class="form-control"><button type="button" class="btn btn-danger" id="remove_btn_'
                + newnumber + '" onclick="Remove(this.id)">Remove</button><button type="button" class="btn btn-primary add" id="add_btn_'
                + newnumber + '" onclick="Addmore(this.id)">Add more</button> <input type="hidden" id="mytext_status_'
                + newnumber + '" name="mytext_status_'
                + newnumber + '" value="1"></div>';
            $(newitem).insertAfter('#Skill_div_' + res);
        }

    }
    else {
        $('<label class="error">Please fill the field</label>').insertAfter('#Skill_div_' + res);
    }
}
function Remove(num) {
    $('.error').remove();
    var str = num;
    var res = str.replace(/\D/g, "");
    $('.add').remove();
    var countnumber = $('#SkillCount').val();
    const skills = [];

    $('#mytext_status_' + res).val('0');
    $('#Skill_div_' + res).addClass('d-none');
    $('#Skill_div_' + res).removeClass('d-flex');
    for (let i = 1; i <= countnumber; i++) {
        if ($('#mytext_status_' + i).val() == '1') {
            skills.push(i);
        }
    }
    var newvalue = Math.max(...skills);
    if (newvalue == 1) {
        $('#Skill_div_' + newvalue).append('<button type="button" class="btn btn-primary add" id="add_btn_1" onclick="Addmore(this.id)">Add more</button>');
    }
    else {
        $('#Skill_div_' + newvalue).append('<button type="button" class="btn btn-primary add" id="add_btn_' + countnumber + '" onclick="Addmore(this.id)">Add more</button>');
    }

    if ($('#mytext_' + res).val() == '') {
        $('#mytext_' + res).val('0');
    }


}







