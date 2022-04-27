// INPUT : User enters 3 integers 
// Check if that number is odd or even ( /2 ) 
// I don't know yet, need to think more, let's code to test something
//OUTPUT : User gonna get quantities of odd and even numbers; 



function quantities() {
    const a = Number (document.getElementById("firstNumber").value ) ; 
    const b = Number (document.getElementById("secondNumber").value ) ; 
    const c = Number (document.getElementById("thirdNumber").value ) ; 
        if (a % 2 && b % 2 && c % 2 ) {
            document.getElementById("showMess").style.display = "block "; 
            document.getElementById("image").src = "./IMG/triang_noun_001_18172.jpg" ; 
            document.getElementById("showResult").innerHTML = "This is an Equilateral Triangle <3" ; 
        } else if ( a === b || b === c || a === c)  {
            document.getElementById("showMess").style.display = "block "; 
            document.getElementById("showResult").innerHTML = "This is an Isosceles Triangle <3" ; 
            document.getElementById("image").src = "./IMG/tam-giac-can-la-gi-dinh-nghia-tinh-chat-ve-tam-giac-can-1.png" ; 
        } else if (a**2 == b ** 2 + c**2 || b **2 == a ** 2 + c ** 2 || c ** 2 == a **2 + b** 2) {
            document.getElementById("showMess").style.display = "block "; 
            document.getElementById("showResult").innerHTML = "This is a Right-angled Triangle <3" ; 
            document.getElementById("image").src = "./IMG/44-440773_vector-black-and-white-black-and-white-for.png" ;
        }   else {
            document.getElementById("showMess").style.display = "block "; 
            document.getElementById("showResult").innerHTML = `This is something else .... Have a nice day Mr.Mentor <3`; 
            document.getElementById("image").src = "./IMG/a326769d-fa4b-4b27-9621-7dd2f86dd633_text.gif" ;
        }
    }