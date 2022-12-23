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
        coursename:{
            required : function(element)
            {
                if($('input[name="details"]:checked').val() == 'Yes')
                {
                    if($('#coursename').val() == '')
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
        "mytext[]":{
            required: function(element)
            {
               if($("#mytext_'+newnumber+'").val() == ""){
                return true;
               }
               else{
                return false;
               }
            }
        }
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
        coursename:"Please Enter your Course Name",
        textarea:"Please Enter your Present education Details",
        skills:"Please Enter your skills",
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


function Addmore(num)
{
    $('.error').remove();
    var str = num;
    var res = str.replace(/\D/g, "");
    var value = $('#mytext_'+res).val();
    //  console.log(value);
    if(value != '')
    {
        $('#add_btn_'+res).remove();
        var newnumber = Number($('#SkillCount').val())+Number(1);
        $('#SkillCount').val(newnumber);
        var newitem = '<div class="d-flex" id="Skill_div_'+newnumber+'"><input type="text" name="mytext[]" id="mytext_'+newnumber+'" placeholder="Add skills" class="form-control"><button type="button" class="btn btn-danger" id="remove_btn_'+newnumber+'" onclick="Remove(this.id)">Remove</button><button type="button" class="btn btn-primary add" id="add_btn_'+newnumber+'" onclick="Addmore(this.id)">Add more</button> <input type="hidden" id="mytext_status_'+newnumber+'" name="mytext_status_'+newnumber+'" value="1"></div>';
        $(newitem).insertAfter('#Skill_div_'+res);
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
}


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
  