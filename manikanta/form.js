
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
            required : function(element)
            {
                if($('input[name="inlineRadioOptions"]:checked').val() == 'yes')
                {
                    if($('#colName').val() == '')
                    {
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                }
                else
                        {
                            return false;
                        }
            }
        },
        styear: {
            required : function(element)
            {
                if($('input[name="inlineRadioOptions"]:checked').val() == 'yes')
                {
                    if($('#exampleInputstartyear').val() == '')
                    {
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                }
                else
                        {
                            return false;
                        }
            }
        },
        endyear: {
            required : function(element)
            {
                if($('input[name="inlineRadioOptions"]:checked').val() == 'yes')
                {
                    if($('#exampleInputendyear').val() == '')
                    {
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                }
                else
                        {
                            return false;
                        }
            }
        },
        course: {
            required : function(element)
            {
                if($('input[name="inlineRadioOptions"]:checked').val() == 'yes')
                {
                    if($('#exampleInputcourseName').val() == '')
                    {
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                }
                else
                        {
                            return false;
                        }
            }
        },
        textarea: {
            required : function(element)
            {
                if($('input[name="inlineRadioOptions"]:checked').val() == 'no')
                {
                    if($('#textarea').val() == '')
                    {
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                }
                else
                        {
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
});