
function myFunction() {
    alert("Your form is successfully submitted");
  }
  
  function ShowHideDiv(ths) {         
    var dvCollege = document.getElementById("dvCollege");
    var edudetails = document.getElementById("edudetails");
    if(ths.checked){
        if(ths.id=="rdYes"){
            dvCollege.style.display = "block";
            edudetails.style.display = "none";
        }else if(ths.id=="rdNo"){
            dvCollege.style.display = "none";
            edudetails.style.display = "block";
        }else{
            dvCollege.style.display = "none";
            edudetails.style.display = "none";
        }                
    }          
  }
  
  
  