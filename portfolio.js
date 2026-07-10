// ==========================================
// Portfolio JavaScript
// Yalala Kavya Reddy
// Web Development Internship - Task 4
// ==========================================


// -----------------------------
// Welcome Message
// -----------------------------

window.addEventListener("load", function () {

    console.log("Portfolio Loaded Successfully!");

});


// -----------------------------
// Resume Download
// -----------------------------

const resumeBtn = document.getElementById("resumeBtn");

if (resumeBtn) {

    resumeBtn.addEventListener("click", function () {

        alert("Resume download will start.");

        // Place your resume inside the project folder
        // Example:
        // project/
        // ├── portfolio.html
        // ├── portfolio.css
        // ├── portfolio.js
        // └── resume.pdf

        window.open("resume.pdf", "_blank");

    });

}



// -----------------------------
// Contact Form Validation
// -----------------------------

const form = document.querySelector("form");

if (form) {

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = form.querySelector('input[type="text"]').value.trim();

    const email = form.querySelector('input[type="email"]').value.trim();

    const message = form.querySelector("textarea").value.trim();


    if (name === "" || email === "" || message === "") {

        alert("Please fill all the fields.");

        return;

    }

    alert("Thank You " + name + "! Your message has been submitted successfully.");

    form.reset();

});

}



// -----------------------------
// Typing Animation
// -----------------------------

const role = document.querySelector(".hero-text h2");

if (role) {

const text = "Computer Science Engineering Student | Web Developer";

let index = 0;

role.innerHTML = "";

function typeText() {

    if (index < text.length) {

        role.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeText, 70);

    }

}

typeText();

}



// -----------------------------
// Scroll Animation
// -----------------------------

const cards = document.querySelectorAll(

".project-card, .skill, .edu-card, .certificate, .card"

);

function revealCards() {

    const trigger = window.innerHeight * 0.85;

    cards.forEach((card) => {

        const top = card.getBoundingClientRect().top;

        if (top < trigger) {

            card.style.opacity = "1";

            card.style.transform = "translateY(0px)";

        }

    });

}

cards.forEach((card) => {

    card.style.opacity = "0";

    card.style.transform = "translateY(60px)";

    card.style.transition = "0.8s";

});

window.addEventListener("scroll", revealCards);

revealCards();




// -----------------------------
// Active Navigation
// -----------------------------

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach((section) => {

    const top = section.offsetTop - 120;

    const height = section.clientHeight;

    if (pageYOffset >= top) {

        current = section.getAttribute("id");

    }

});

navLinks.forEach((link) => {

    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {

        link.classList.add("active");

    }

});

});



// -----------------------------
// Hover Effect for Skills
// -----------------------------

const skills = document.querySelectorAll(".skill");

skills.forEach((skill) => {

skill.addEventListener("mouseenter", () => {

    skill.style.transform = "scale(1.08)";

});

skill.addEventListener("mouseleave", () => {

    skill.style.transform = "scale(1)";

});

});



// -----------------------------
// Smooth Button Animation
// -----------------------------

const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {

btn.addEventListener("mouseover", () => {

    btn.style.transition = "0.3s";

});

});




// -----------------------------
// Footer Year
// -----------------------------

const footer = document.querySelector("footer p");

if (footer) {

const year = new Date().getFullYear();

footer.innerHTML =
`© ${year} Yalala Kavya Reddy | Web Development Internship Project`;

}