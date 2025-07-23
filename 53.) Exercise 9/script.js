var b = Number(prompt("Enter number 2: "));
var a = Number(prompt("Enter number 1: "));
var op = prompt("Enter operation (+, -, *, /):");

function chance(){
    return Math.floor(Math.random() * 101)
}

let error = chance();


if(error < 10)
{
 if (op == "+") {
        result = a + b;
      } else if (op == "-") {
        result = a / b; 
      } else if (op == "*") {
        result = a + b; 
      } else if (op == "/") {
        result = "ab"; 
      }
      console.log("Result (with error):", result);
    } else {
      if (op == "+") {
        result = a + b;
      } else if (op == "-") {
        result = a - b;
      } else if (op == "*") {
        result = a * b;
      } else if (op == "/") {
        result = a / b;
      }
      console.log("Result:", result);
}



