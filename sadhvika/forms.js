// let myForm = document.getElementById("myForm");
// let yesEl = document.getElementById("yes");
// let NoEl = document.getElementById("No");
// let yesblock = document.getElementById("yesblock");
// let noblock = document.getElementById("noblock");
// let selectedOption = null;
// yesEl.addEventListener("click", function(event) {
//     yesblock.classList.remove("d-none");
//     yesblock.classList.add("d-block");
//     noblock.classList.remove("d-block");
//     noblock.classList.add("d-none");
// });
// NoEl.addEventListener("click", function(event) {
//     yesblock.classList.remove("d-block")
//     yesblock.classList.add("d-none");
//     noblock.classList.remove("d-none");
//     noblock.classList.add("d-block");
// });
jQuery.validator.addMethod("lettersonly", function(value, element) {
    return this.optional(element) || /^[a-z]+$/i.test(value);
});
$("#myForm").validate({
    rules:{
        firstname:{
            required:true,
            lettersonly:true, 
        },
        lastname:{
            required:true,
            lettersonly:true, 
        },
        email:{
            required:true,
            email:true,
        },
        mobilenum:{
            required:true,
            digits:true,
        },
        details:"required",
        clgname:{
            required : function(element)
            {
                if($('input[name="details"]:checked').val() == 'Yes')
                {
                    if($('#clgname').val() == '')
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
        startyear:{
            required : function(element)
            {
                if($('input[name="details"]:checked').val() == 'Yes')
                {
                    if($('#startyear').val() == '')
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
        endyear:{
            required : function(element)
            {
                if($('input[name="details"]:checked').val() == 'Yes')
                {
                    if($('#endyear').val() == '')
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
        textarea:{
            required : function(element)
            {
                if($('input[name="details"]:checked').val() == 'No')
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
        },
    },
    messages:{
        firstname:{
            required:"Please Enter First name",
            lettersonly:"Please Enter letters only", 
        },
        lastname:{
            required:"Please Enter Last name",
            lettersonly:"Please Enter letters only", 
        },
        email:{
            required:"Please Enter Email Id",
            email:"Please Enter a valid Email Id",
        },
        mobilenum:{
            required:"Please Enter your Mobile number",
            digits:"Enter valid Mobile Number",
        },
        clgname:"Please Enter your College Name",
        startyear:"Please Enter your Start Year",
        endyear:"Please Enter your End Year",
        textarea:"Please Enter your Present education Details",
    },
    errorPlacement:
        function( error, element ){
        if(element.attr("name") == "details"){
        error.insertAfter('#radiobtn');
        }
        else {
        error.insertAfter(element);
        }
    },
});



$('input[name="details"]').click(function(){
    let ShareField = $('input[name="details"]:checked').val();
    if(ShareField == 'Yes')
    {
      $('#yesblock').show();
      $('#noblock').hide();
    }
    else if(ShareField == 'No')
    {
      $('#yesblock').hide();
      $('#noblock').show();
    }
    else{
      $('#yesblock').hide();
      $('#noblock').hide();
    }
  });
  $(document).ready(function(){
    $('#yesblock').hide();
    $('#noblock').hide();
  });
