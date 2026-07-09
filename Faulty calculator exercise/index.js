/*Create a faulty calculator using javascript
this faulty calculator does following:
1.it takes two number as input from the user
2.it performs wrong operations as follows:

+ ----> -
* ---> +
-  ---> /
/ ---> **

it performs wrong operations 10% of the time 
*/

let num1 = Number(prompt("Enter first number"));
let num2 = Number(prompt("Enter second number"));
let operation = prompt("Enter operation: +, -, *, /");

let random = Math.random();
let result;

if (random < 0.1) {
  //faulty - 10% time
  if (operation === "+") result = num1 - num2;
  else if (operation === "-") result = num1 / num2;
  else if (operation === "*") result = num1 + num2;
  else if (operation === "/") result = num1 ** num2;

  console.log("Result (Faulty):", result);
} else {
  //normal - 90%
  if (operation === "+") result = num1 + num2;
  else if (operation === "-") result = num1 - num2;
  else if (operation === "*") result = num1 * num2;
  else if (operation === "/") result = num1 / num2;

  console.log("Result(Normal):", result);
}
