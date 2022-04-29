// INPUT : User enters 3 integers 
// Check if that number is odd or even ( % 2 == 0 ) 
// I don't know yet, need to think more, let's code to test something
//OUTPUT : User gonna get quantities of odd and even numbers; 
`usestrict` ; 

function quantities(e) {
    const firstNumber = Number (document.getElementById("firstNumber").value ) ; 
    const secondNumber = Number (document.getElementById("secondNumber").value ) ; 
    const thirdNumber = Number (document.getElementById("thirdNumber").value ) ; 
    
    if (firstNumber ===  "" || secondNumber == ""  || thirdNumber === "" )  {
        e.preventDefault();
        alert ("Enter Numbers");
        
    }
    else if (isNaN(firstNumber) || isNaN(secondNumber) || isNaN(thirdNumber) )  {
        alert ("Unvalid Numbers");
    } else {
        document.getElementById("showMess").style.display = "block "; 
        document.getElementById("showResult").innerHTML = "There are 3 Even Numbers" ; 
    }

    if (    firstNumber % 2 === 0 
        &&  secondNumber % 2 === 0 
        &&  thirdNumber % 2 === 0) {
        
        document.getElementById("showMess").style.display = "block "; 
        document.getElementById("showResult").innerHTML = "There are 3 Even Numbers" ; 
    }  else if (firstNumber % 2 !== 0 
        &&      secondNumber % 2 !== 0 
        &&      thirdNumber % 2 !== 0) {
       
        document.getElementById("showMess").style.display = "block "; 
        document.getElementById("showResult").innerHTML = "There are 3 Odd Numbers" ; 
    }
        // 3 Even

      else if ((firstNumber % 2 == 0 && secondNumber % 2 == 0) 
            || (thirdNumber % 2 == 0 && secondNumber % 2 == 0) 
            || (thirdNumber % 2 == 0 && firstNumber % 2 == 0)) {
     
        document.getElementById("showMess").style.display = "block "; 
        document.getElementById("showResult").innerHTML = "There are 2 Even Number(s) , 1 Odd Number(s)" ; 
    }

    // 2 Even 
    else if ((firstNumber % 2 !== 0 && secondNumber % 2 !== 0) 
        ||   (thirdNumber % 2 !== 0 && secondNumber % 2 !== 0) 
        ||   (thirdNumber % 2 !== 0 && firstNumber % 2 !== 0)) {
     
        document.getElementById("showMess").style.display = "block "; 
        document.getElementById("showResult").innerHTML = "There are 1 Even Number(s) , 2 Odd Number(s)" ; 
    }
   
    // 1 Even
  
}  