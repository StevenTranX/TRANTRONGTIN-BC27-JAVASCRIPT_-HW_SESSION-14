 /*3-block chart 
 INPUT : User selects 1 of options to greet dad/mom/brother/sister; 
    Create a  greeting function
    DOM to select -> options to get value from each one;
    write if else to execute
OUTPUT : User could be greeted by program */
    function greeting () {
        // const greet = document.getElementById("family").value;
        const greet = document.getElementById("family").selectedIndex;
        // both worked so fine
      
        if (greet == 1) {
            document.getElementById("showMess").style.display = "block "; 
            document.getElementById("showResult").innerHTML = "Hello Dad !!!"
        } else if (greet == 2) {
            document.getElementById("showMess").style.display = "block "; 
            document.getElementById("showResult").innerHTML = "Hello Mom !!!"
        }
         else if (greet == 3) {
            document.getElementById("showMess").style.display = "block "; 
            document.getElementById("showResult").innerHTML = "Hello Brother !!!"
        }
         else if(greet == 4) {
            document.getElementById("showMess").style.display = "block "; 
            document.getElementById("showResult").innerHTML = "Hello Sister !!!"
         }
        }


        
function greeting2 () {

    const el = document.getElementById("family2").selectedOptions[0].value;
  
    if (el == 'dad') {
        document.getElementById("showMess2").style.display = "block "; 
        document.getElementById("showResult2").innerHTML = "Hello Dad !!!"
    } else if (el == 'mom') {
        document.getElementById("showMess2").style.display = "block "; 
        document.getElementById("showResult2").innerHTML = "Hello Mom !!!"
    }
     else if (el == 'brother') {
        document.getElementById("showMess2").style.display = "block "; 
        document.getElementById("showResult2").innerHTML = "Hello Brother !!!"
    }
     else if(el == 'sister') {
        document.getElementById("showMess2").style.display = "block "; 
        document.getElementById("showResult2").innerHTML = "Hello Sister !!!"
     }
    }
// selected options worked perfectly fine !!! Otherwise, we could change value to 1,2,3,4 and DOM to value. 