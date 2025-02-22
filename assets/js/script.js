document.addEventListener("DOMContentLoaded", () => {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Highlight Active Page
    const currentLocation = window.location.pathname.split("/").pop();
    const menuItems = document.querySelectorAll(".nav-item");

    menuItems.forEach(item => {
        if (item.getAttribute("href") === currentLocation) {
            item.classList.add("active");
        }
    });

    


    // Fade-in Animation on Scroll
    const fadeInElements = document.querySelectorAll(".fade-in");
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    });

    fadeInElements.forEach(el => observer.observe(el));
});
