// 1. Element Banana
let newDiv = document.createElement("div");
let newPara = document.createElement("p");
let newButton = document.createElement("button");
// 2. Content Daalna
let newPara = document.createElement("p");
newPara.innerText = "Main naya paragraph hoon";
newPara.style.color = "red";
// 3. DOM mein Add Karna
let container = document.querySelector(".container");
let newPAra = document.createElement("p");
newPara.innerText = "Main end mein aya ";
container.appendChild(newPAra);
//  Container ke bilkul end mein add ho jaayega

let container = document.querySelector(".container");
let newPara = document.createElement("p");
newPara.innerText = "Main shuruat mein aaya";

container.prepend(newPara);
// Container ke bilkul shuruat mein add ho jaayega

let container = document.querySelector(".container");
let existingPara = document.querySelector("#existing");
let newPara = document.createElement("p");
newPara.innerText = "Main existing ke pehle aaya";

container.insertBefore(newPara, existingPara);

let existingPara = document.querySelector("p");

// Ke baad add karo
existingPara.after(newElement);

// Ke pehle add karo
existingPara.before(newElement);

// 4. Element Remove Karna
let para = document.querySelector("p");
para.remove();
// Woh element DOM se hat jaayega