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

// Envia e-mail
function sendEmail() {
    const form = document.getElementById("contato-form")
    const alertBox = document.getElementById("alert");
    const alertMsg = document.getElementById("alert-text");

    if (!form.checkValidity()) {
        alertBox.style.display = "flex";
        alertMsg.innerText = "Certifique-se de que todos os campos são válidos para poder enviar"
        return;
    }

    const sender   = document.getElementById("name").value;
    const email    = document.getElementById("email").value;
    const message  = document.getElementById("message").value;

    fetch("https://formsubmit.co/ajax/vitorhugo-57@hotmail.com", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: sender,
            email: email,
            message: message
        })
    })
    .then(response => response.json())
    .then(data => {
        alertBox.classList.add("success");
        alertBox.style.display = "flex";
        alertMsg.innerText = "E-mail enviado com sucesso!"
    })
    .catch(error => {
        console.log(error)
        alertBox.style.display = "flex";
        alertMsg.innerText = "Ocorreu um erro! Tente novamente mais tarde."
    });
}

const sendBtn = document.getElementById("sendBtn");
sendBtn.addEventListener("click", () => sendEmail());

const closeBtn = document.getElementById("closeBtn");
closeBtn.addEventListener("click", () => {
    const alertBox = document.getElementById("alert");
    alertBox.style.display = "none";
    alertBox.classList.remove("success");
});