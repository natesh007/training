
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
        },
        mytext : {
            required :(function(){
                
              
              var addlist_button = $('input[name=addlist]');
                addlist_button.on('click', function(event){
                  
                  var skill_name = $('input[name=mytext]').val();
                  if(skill_name == ""){
                    $('.show_hide').hide();;
                  }
                  else{
                    $('.show_hide').show();
                  }
                });
              })()
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
        mytext : {
            required : "please enter your skills",
           
        }
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
        }
});
// Add more
// $(function() {
//     $("#addMore").click(function(e) {
//       e.preventDefault();
//       $("#fieldList").append("<div>&nbsp;</div>");
//       $("#fieldList").append("<input type='text' name='skills[]' placeholder='skills' />");
//     //   $("#fieldList").append("<li><input type='text' name='skills[]' placeholder='skills' /></li>");
//     //   $("#fieldList").append("<li><input type='text' name='skills[]' placeholder='skills' /></li>");
//     });
//   });
$(document).ready(function () {
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
});