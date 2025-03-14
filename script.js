// Efect de schimbare a culorii textului la scroll
window.addEventListener("scroll", function() {
    let header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.background = "black";
    } else {
        header.style.background = "linear-gradient(90deg, #d32f2f, #9c27b0)";
    }
});

// Efect de fade-in pentru elemente
document.addEventListener("DOMContentLoaded", function() {
    let elements = document.querySelectorAll("h2, p, .button");

    elements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
    });

    setTimeout(() => {
        elements.forEach(el => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            el.style.transition = "all 0.8s ease-in-out";
        });
    }, 300);
});