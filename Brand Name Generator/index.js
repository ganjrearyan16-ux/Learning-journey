/* Creating a Brand/Business name generator by combining list of adjectives and shop name and another word

Adjectives:
Crazy
Amazing
Fire

Shop Name:
Engine
Foods
Garments


Another Word:
Bros
Limited
Hub  

*/


let adj1 = "crazy";
let adj2 = "Amazing";
let adj3 = "Fire";

let random = Math.floor(Math.random()*3) +1;


if(random === 1){
    console.log("Crazy Engine Bros")
}else if(random === 2){
    console.log("Amazing Foods Limited")
}else{
    console.log("Fire Garments Hub")
}
