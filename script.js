const scrollTopBtn = document.getElementById('scrollTopBtn');

// Mostra botão após scrollar 1px
window.onscroll = () => {
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};