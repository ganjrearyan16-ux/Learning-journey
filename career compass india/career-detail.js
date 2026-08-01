const data = localStorage.getItem("career");
const career = JSON.parse(data);
console.log(career);
const title = document.getElementById("title");
title.textContent = career.title;
const description = document.getElementById("description");
description.textContent = career.description;
const salary = document.getElementById("salary");
salary.textContent = career.salary;
// const skills =document.getElementById("skills");
// career.skills.forEach(function (skill) {
//   const li = document.createElement("li");
//   li.textContent = skill;
//   skill.appendChild(li);
// });
// const companies = document.getElementById("companies");
// career.companies.forEach(function (company) {
//   const li = document.createElement("li");
//   li.textContent = company;
//   companies.appendChild(li);
// });
const skillsContainer = document.getElementById("skills");
const companiesContainer = document.getElementById("companies");
function renderList(list, container) {
  list.forEach(function (item) {
    const li = document.createElement("li");
    li.textContent = item;
    container.appendChild(li);
  });
}
renderList(career.skills, skillsContainer);
renderList(career.companies, companiesContainer);
const backbtn = document.getElementById("backbtn");
backbtn.addEventListener("click", function () {
  window.history.back();
});
