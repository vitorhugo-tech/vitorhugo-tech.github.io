const scrollTopBtn = document.getElementById('scrollTopBtn');

// Mostra botão após scrollar 1px
window.onscroll = () => {
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const xmark = document.querySelector(".fa-xmark");
const bars = document.querySelector(".fa-bars");

toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    xmark.classList.toggle("active");
    bars.classList.toggle("active");
});

navLinks.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    xmark.classList.toggle("active");
    bars.classList.toggle("active");
});