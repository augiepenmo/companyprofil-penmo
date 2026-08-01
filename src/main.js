import "./style.css";

// ================= IMPORT SWIPER =================
import Swiper from "swiper";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

// ================= SWIPER =================
new Swiper(".menuSwiper", {
    modules: [Autoplay, Pagination],

    loop: true,
    speed: 500,

    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    spaceBetween: 20,

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});

// ================= MENU MOBILE =================
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });
}

// ================= NAVBAR =================
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (!navbar) return;

    if (window.scrollY > 50) {
        navbar.classList.add("navbar-scroll");
    } else {
        navbar.classList.remove("navbar-scroll");
    }
});

// ================= BACK TO TOP =================
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (!backToTop) return;

    if (window.scrollY > 300) {
        backToTop.classList.remove("hidden");
        backToTop.classList.add("flex");
    } else {
        backToTop.classList.remove("flex");
        backToTop.classList.add("hidden");
    }
});

if (backToTop) {
    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
}