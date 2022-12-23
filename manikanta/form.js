
function showdetails(radiovalue) {
    var clgdetails = document.getElementById("show-form");
    var presentdetails = document.getElementById("show-education")
    if (radiovalue.value === "yes") {
        clgdetails.style.display = "block"
        presentdetails.style.display = "none"
    }
    else {
        clgdetails.style.display = "none"
        presentdetails.style.display = "block"
    }
}
// validation
jQuery.validator.addMethod("lettersonly", function (value, element) {
    return this.optional(element) || /^[a-z\s]+$/i.test(value);
});
$('#myform').validate({
    rules: {
        fName: {
            required: true,
            lettersonly: true,
        },
        lName: {
            required: true,
            lettersonly: true,
        },
        email: {
            required: true,
            email: true,
        },
        mobile: {
            required: true,
            digits: true,
        },
        inlineRadioOptions: "required",
        colName: {
            required: function (element) {
                if ($('input[name="inlineRadioOptions"]:checked').val() == 'yes') {
                    if ($('#colName').val() == '') {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
                else {
                    return false;
                }
            }
        },
        styear: {
            required: function (element) {
                if ($('input[name="inlineRadioOptions"]:checked').val() == 'yes') {
                    if ($('#exampleInputstartyear').val() == '') {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
                else {
                    return false;
                }
            }
        },
        endyear: {
            required: function (element) {
                if ($('input[name="inlineRadioOptions"]:checked').val() == 'yes') {
                    if ($('#exampleInputendyear').val() == '') {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
                else {
                    return false;
                }
            }
        },
        course: {
            required: function (element) {
                if ($('input[name="inlineRadioOptions"]:checked').val() == 'yes') {
                    if ($('#exampleInputcourseName').val() == '') {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
                else {
                    return false;
                }
            }
        },
        textarea: {
            required: function (element) {
                if ($('input[name="inlineRadioOptions"]:checked').val() == 'no') {
                    if ($('#textarea').val() == '') {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
                else {
                    return false;
                }
            }
        }
    },
    messages: {
        fName: {
            required: "please enter your first name",
            lettersonly: "enter only letters"
        },
        lName: {
            required: "please enter your first name",
            lettersonly: "enter only letters"
        },
        email: {
            required: "please enter your email",
            email: "enter valid email",
        },
        mobile: {
            required: "please enter your mobile number",
            digits: "please enter only digits",
        },
        inlineRadioOptions: "please select option",
        colName: "please enter college name",
        styear: {
            required: "please enter start year",
        },
        endyear: {
            required: "please enter end year",
        },
        course: {
            required: "please enter course",
        },
        textarea: "please enter details",
    },
    errorPlacement:
        function (error, element) {
            if (element.is(":radio")) {
                // error append here
                error.insertAfter('#radio-div');
            }
            else {
                error.insertAfter(element);
            }
        },
    submitHandler:function(form){
        var newfnction = newcheck();
        if(newfnction != 1)
        {
            alert('submit');
        }
    }
});

function newcheck()
{
    $('.errors').remove();
    var word = 0;
    var count = $('#SkillCount').val();
    for(let i =1; i <= count; i++ )
    {
        if($('#mytext_'+i).val() == '' && $('#mytext_status_'+i).val() == '1')
        {
            $('<label class="errors">please fill the field</label>').insertAfter('#Skill_div_'+i);
            word = 1;
        }
    }
    return word;
}

function Addmore(num)
{
    $('.error').remove();
    var str = num;
    var res = str.replace(/\D/g, "");
    var value = $('#mytext_'+res).val();
    //  console.log(value);
    // limit
    var max_limit = 3;
    var limit = $("#SkillClick").val();
    console.log(limit);
    
    // 
    if(value != '')
    {
        $('#add_btn_'+res).remove();
        
        if (limit < max_limit) {
            var newnumber = Number($('#SkillCount').val())+Number(1);
        $('#SkillCount').val(newnumber);
        var neword = Number($('#SkillClick').val())+1;
        $('#SkillClick').val(neword);
        
            var newitem = '<div class="d-flex" id="Skill_div_'+newnumber+'"><input type="text" name="mytext[]" id="mytext_'+newnumber+'" placeholder="Add skills" class="form-control text-field"><button type="button" class="btn btn-danger" id="remove_btn_'+newnumber+'" onclick="Remove(this.id)">Remove</button><button type="button" class="btn btn-primary add" id="add_btn_'+newnumber+'" onclick="Addmore(this.id)">Add more</button> <input type="hidden" id="mytext_status_'+newnumber+'" name="mytext_status_'+newnumber+'" value="1"></div>';
        $(newitem).insertAfter('#Skill_div_'+res);
        }
        
        
    }
    else
    {
        $('<label class="error">Please fill the field</label>').insertAfter('#Skill_div_'+res);
    }
}
function Remove(num)
{
    $('.error').remove();
    var str = num;
    var res = str.replace(/\D/g, "");
    $('.add').remove();
    var countnumber = $('#SkillCount').val();
    const skills = [];
    
    $('#mytext_status_'+res).val('0');
    $('#Skill_div_'+res).addClass('d-none');
    $('#Skill_div_'+res).removeClass('d-flex');
    for(let i = 1; i <= countnumber; i++)
    {
        if($('#mytext_status_' + i).val() == '1')
        {
            skills.push(i);
        }
    }
    var newvalue = Math.max(...skills);
    if(newvalue == 1)
    {
        $('#Skill_div_'+newvalue).append('<button type="button" class="btn btn-primary add" id="add_btn_1" onclick="Addmore(this.id)">Add more</button>');
    }
    else
    {
        $('#Skill_div_'+newvalue).append('<button type="button" class="btn btn-primary add" id="add_btn_'+countnumber+'" onclick="Addmore(this.id)">Add more</button>');
    }

    if($('#mytext_'+res).val() == '')
    {
        $('#mytext_'+res).val('0'); 
    }
   var word = Number($('#SkillClick').val()) - Number(1);
   $('#SkillClick').val(word);
    
}

/* $(document).ready(function () {
    var max_fields = 10; //maximum input boxes allowed
    var wrapper = $(".input_fields_wrap"); //Fields wrapper
    var add_button = $(".add_field_button"); //Add button ID

    var x = 1; //initlal text box count
    $(add_button).click(function (e) { //on add input button click
        e.preventDefault();
        if (x < max_fields) { //max input box allowed
            x++; //text box increment
            $(wrapper).append('<div class="show_hide"><input type="text" placeholder="skills" name="skills"/><btn  class="remove_field">Remove</btn></div>'); //add input box
        }
    });

    $(wrapper).on("click", ".remove_field", function (e) { //user click on remove text
        e.preventDefault(); $(this).parent('div').remove(); x--;
    })
}); */