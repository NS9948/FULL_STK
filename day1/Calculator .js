let number1 = Number(prompt("Enter the first number: "));
let number2 = Number(prompt("Enter the second number: "));

let operator = prompt("Which operation to perform");

let ans = (operator == "+") ? number1 + number2 :
 (operator == "-") ? number1 - number2 :
  (operator == "*") ? number1 * number2 :
   (operator == "/") ? number1 / number2 :
  "Invalid Operator"; 

console.log(ans);