const taskInput = document.getElementById("taskInput");
// console.log(taskInput);
const addbtn = document.getElementById("addbtn");

document.getElementById("tasklist");

console.log(taskInput);
console.log(addbtn);
console.log(tasklist);

addbtn.addEventListener("click", function () {
  const task = taskInput.value;
  console.log(taskInput);

  console.log(taskInput.value);
  const li = document.createElement("li");

  li.textContent = task;

  tasklist.appendChild(li);
});


