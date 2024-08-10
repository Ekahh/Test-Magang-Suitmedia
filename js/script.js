// Variabel scroll
let lastScrollTop = 0;
const header = document.querySelector("header");
const threshold = 100; // Jarak scroll sebelum header menghilang

// Event listener untuk scroll
window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop && scrollTop > threshold) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }

  // Ngatur opacity berdasarkan posisi scroll
  let opacity = Math.max(0, Math.min(1 - scrollTop / threshold, 1));
  header.style.opacity = opacity;

  lastScrollTop = scrollTop;

  // Parallax
  const parallax = document.querySelector(".parallax-bg");
  parallax.style.transform = "translateY(" + scrollTop * 0.3 + "px)";
});

// Fungsi mengatur active state menu
function setActiveMenu() {
  const menuItems = document.querySelectorAll("nav ul li a");
  const currentPath = window.location.pathname;

  menuItems.forEach((item) => {
    if (item.getAttribute("href") === currentPath) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

// Manggil fungsi setActiveMenu
window.addEventListener("load", setActiveMenu);
