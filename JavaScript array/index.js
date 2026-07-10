const fruits = ["Apple", "Banana", "Cherry"];

console.log(fruits[0]);
console.log(fruits[2]);
console.log(fruits[1]);
console.log(fruits.length);

fruits[1] = "blueberry";
console.log(fruits);

fruits.push("date");
console.log(fruits);

const removedfruit = fruits.pop();
console.log(removedfruit);
console.log(fruits);

fruits.forEach((fruit, index) => {
  console.log(`Index ${index}: ${fruit}`);
});

fruits.unshift("aryan");
console.log(fruits);

fruits.shift();
console.log(fruits);

///////////////////////////////////////////

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
console.log(doubled);

const evens = numbers.filter((num) => num % 2 === 0);
console.log(evens);

const total = numbers.reduce(
  (accumulator, current) => accumulator + current,
  0,
);
console.log(total);
