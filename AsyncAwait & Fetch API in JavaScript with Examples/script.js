// async function getData() {
//     //simulate getting data from a server
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(786);
//     }, 3500);
//   });
// }
async function getData() {
    //simulate getting data from a server
  let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  let data = await x.json()
     console.log(data)
     return 786
}
async function main() {
  console.log("Loading modules");
  console.log("Do something else");
  console.log("Load data");
  let data = await getData();
  console.log(data)
  console.log("Task 2")
}
main()
// data.then((v) => {
//   console.log(data);
//   console.log("process data");
//   console.log("Task 2");
// });

//...................................//
//...................................//


// Settle means resolve or reject
// resolve means promise has settled successfully
// Reject means promise has not settled successfully