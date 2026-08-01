// function orderFood(callback) {
//   console.log("🍔 Food Ordered");

//   setTimeout(function () {
//     console.log("🍔 Food Ready");

//     callback();
//   }, 3000);
// }

// function eatFood() {
//   console.log("😋 Eating Food");
// }

// orderFood(eatFood);

// const promise = new Promise(function(resolve, reject){

//     console.log("Making Pizza...");

//     setTimeout(function(){

//         resolve();

//     },3000);

// });

// promise.then(function(){

//     console.log("🍕 Pizza Delivered");

// });
// function getPizza() {

//     return new Promise(function(resolve) {

//         setTimeout(function() {

//             resolve("🍕 Pizza Ready");

//         },3000);

//     });

// }

// getPizza()
// .then(function(result){

//     console.log(result);

// });


function getNumber(){

    return new Promise(function(resolve){

        setTimeout(function(){

            resolve(100);

        },2000);

    });

}

async function start(){

    const number = await getNumber();

    console.log(number);

}

start();