//Task 1. Write a program contains 3 real number gradually increasing. 

// INPUT : Create 3 textBox contain 3 values of number - User fill numbers in the box. 
// Step 1 : Create numberic variables for each box 
// Step 2 : DOM to each boxes to get values 
// Step 3 : Write a function including all possible if else statements to compare values. 
// a > b > c , a > b > c , b > a > c , b > c > a , c > a > b , c > a > b. 
// Step 4 : Set function for button to display the result. 



function sortNumber () {

    const x = Number(document.getElementById("firstNumber").value); 
    const y=  Number(document.getElementById("secondNumber").value); 
    const z = Number(document.getElementById("thirdNumber").value); 

if (x> y && y > z ) {
    document.getElementById("showMess").style.display = "block";
    document.getElementById("showResult").innerHTML = x + ' > ' + y + ' > ' + z;

} else if (x > z && z > y) {
    document.getElementById("showMess").style.display = "block";
    document.getElementById("showResult").innerHTML = x + ' > ' + z + ' > ' + y;

} else if (y > x && x > z) {
    document.getElementById("showMess").style.display = "block";
    document.getElementById("showResult").innerHTML = y + ' > ' + x + ' > ' + z;
} else if (y > z && z > x) {
    document.getElementById("showMess").style.display = "block";
    document.getElementById("showResult").innerHTML = y + ' > ' + z + ' > ' + x;
} else if (z > x && x > y) {
    document.getElementById("showMess").style.display = "block";
    document.getElementById("showResult").innerHTML = z + ' > ' + x + ' > ' + y; 
} else {
    document.getElementById("showMess").style.display = "block";
    document.getElementById("showResult").innerHTML = z + ' > ' + y + ' > ' + x; 
}
}





// if (firstNumber > secondNumber) {
//     console.log ( firstNumber > secondNumber > thirdNumber )
// } else {
//     console.log ("NA")
// }


