const careers = [
  {
    title: "Software Engineer",
    description: "Build website, apps and software.",
    salary: "₹6-12 LPA",
  },
  {
    title: "AI/ML Engineer",
    description: "Create intelligent AI System.",
    salary: "₹8-15 LPA",
  },
  {
    title: "Data Scientist",
    description: "Analyze data to solve business problems.",
    salary: "₹7-14 LPA",
  },
  {
    title: "Cyber Security Engineer",
    description: "Protect systems from cyber attacks.",
    salary: "₹6-13 LPA",
  },
  {
    title: "Thousands of career across different fields of work.",
    description: "Having great Earning potential",
  },
  {
    title: "Browser Game Developer",
    description:
      "Creates interactive 2D and 3D games for web browsers using engines like Phaser or Three.js.",
    salary: "$85,000 per year",
  },
  {
    title: "IoT Hardware Developer",
    description:
      "Programs smart home devices, robots, and microcontrollers using Node.js and Johnny-Five.",
    salary: "$92,000 per year",
  },
  {
    title: "Data Visualization Engineer",
    description:
      "Builds complex, interactive charts and live data dashboards for businesses using D3.js.",
    salary: "$98,000 per year",
  },
  {
    title: "Web Security Automation Engineer",
    description:
      "Writes custom Node.js security scripts and automation tools to scan and protect web applications.",
    salary: "$110,000 per year",
  },
  {
    title: "JavaScript Performance Engineer",
    description:
      "Optimizes memory usage, code loading times, and rendering speeds for massive web applications.",
    salary: "$115,000 per year",
  },
];

const cardsContainer = document.querySelector(".cards-container");
console.log(cardsContainer);

careers.forEach(function (career) {
  const card = document.createElement("div");
  console.log(card);
  card.classList.add("c");
  const title = document.createElement("h3");
  title.textContent = career.title;
  card.appendChild(title);
  cardsContainer.appendChild(card);

  const description = document.createElement("p");
  description.textContent = career.description;
  card.appendChild(description);

  const salary = document.createElement("p");
  salary.classList.add("salary");
  salary.textContent = career.salary;
  card.appendChild(salary);
  const salarybox = document.createElement("div");
  salarybox.appendChild(salary);
  card.appendChild(salarybox);

  const btn = document.createElement("button");
  btn.textContent = "Explore Career";
  btn.classList.add("bttn");
  card.appendChild(btn);

  btn.addEventListener("click", function (event) {
    console.log(career);
    localStorage.setItem("career", JSON.stringify(career));

    window.location.href = "career-detail.html";
  });
});
