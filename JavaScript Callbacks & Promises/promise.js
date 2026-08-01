console.log("This is Promises");

let prom1 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("No random number was not supporting you ");
  } else {
    setTimeout(() => {
      console.log("Yes I am done");
      resolve("Aryannnn");
    }, 2000);
  }
});
let prom2 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("No random number was not supporting you 22222 ");
  } else {
    setTimeout(() => {
      console.log("Yes I am done");
      resolve("Aryannnn22222");
    }, 1000);
  }
});

let p3 = Promise.all([prom1, prom2 ])
p3.then((a)=>{
    console.log(a)
}).catch(err=>{
    console.log(err)
})