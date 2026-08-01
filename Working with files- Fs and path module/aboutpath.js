import path from "path";
let myPath =
  " C:\Users\ganjr\OneDrive\Desktop\My Work\learning-journey\Working with files- Fs and path module\\Aryan.txt";
console.log(path.extname(myPath));
console.log(path.dirname(myPath));
console.log(path.basename(myPath));


console.log(path.join("c:/", "programs\\Aryan.txt"))