console.log("Aryan");

// let boxes = document.getElementsByClassName("box")
// console.log(boxes)

// boxes[2].style.backgroundColor = "red"

document.getElementById("box2").style.backgroundColor = "green";

document.querySelector(".box").style.backgroundColor = "red";

document.querySelectorAll(".box").forEach((e) => {
  e.style.backgroundColor = "grey";
});
