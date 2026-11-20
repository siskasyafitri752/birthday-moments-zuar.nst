document.addEventListener("DOMContentLoaded", function () {
    // =====================================
    // 1. TOMBOL BUKA DAN TUTUP SURAT
    // =====================================

    const openLetter = document.getElementById("openLetter");
    const letterContent = document.getElementById("letterContent");

    if (openLetter && letterContent) {
        openLetter.setAttribute("aria-expanded", "false");

        openLetter.addEventListener("click", function () {
            const isOpen = letterContent.classList.toggle("show");

            openLetter.textContent = isOpen
                ? "Close Your Letter"
                : "Open Your Letter";

            openLetter.setAttribute("aria-expanded", String(isOpen));
        });
    }

    // =====================================
    // 2. ANIMASI SAAT SCROLL
    // =====================================

    const revealElements = document.querySelectorAll(
        ".hero-content, .section-heading, .message-card, .gallery-item, .wish-card, .closing-content"
    );

    revealElements.forEach(function (element) {
        element.classList.add("reveal");
    });

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
            function (entries, observer) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.15
            }
        );

        revealElements.forEach(function (element) {
            observer.observe(element);
        });
    } else {
        revealElements.forEach(function (element) {
            element.classList.add("visible");
        });
    }

    // =====================================
    // 3. NAVIGASI SCROLL HALUS
    // =====================================

    const navigationLinks = document.querySelectorAll(
        'a[href^="#"]'
    );

    navigationLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            const targetId = link.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                event.preventDefault();

                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // =====================================
    // 4. EFEK HEADER SAAT SCROLL
    // =====================================

    const header = document.querySelector(".header");

    function updateHeader() {
        if (header) {
            if (window.scrollY > 40) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        }
    }

    window.addEventListener("scroll", updateHeader);
    updateHeader();

    // =====================================
    // 5. TAHUN OTOMATIS DI FOOTER
    // =====================================

    const yearElement = document.getElementById("currentYear");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});