
//The Document Object Model (DOM) is a programming interface that represents an HTML document as a tree structure of objects (called "nodes")


//id se element pakdo
let parent = document.getElementById("parent");
let child1 = document.getElementById("child1");
let child2 = document.getElementById("child2");

//who is parent
console.log(child1.parentNode); 
//saare children
console.log(parent.children);
//pehla child
console.log(parent.children[0]);
//Akhri child
console.log(parent.lastElementChild);
//Agla sibling
console.log(child1.nextElementSibling);
//pichla sibling
console.log(child1.previousElementSibling);

