const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const form = document.getElementById("contactForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("Message Sent Successfully!");

    form.reset();
});