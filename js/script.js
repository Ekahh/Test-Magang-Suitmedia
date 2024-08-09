let lastScrollTop = 0;
const header = document.querySelector("header");
const threshold = 100; // Jarak scroll sebelum header menghilang

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop && scrollTop > threshold) {
    header.classList.add("hidden"); // Scroll ke bawah dan melewati threshold
  } else {
    header.classList.remove("hidden"); // Scroll ke atas atau belum melewati threshold
  }

  // Ngatur opacity berdasarkan posisi scroll
  let opacity = Math.max(0, Math.min(1 - scrollTop / threshold, 1));
  header.style.opacity = opacity;

  lastScrollTop = scrollTop;
});

// Ngatur active state pada menu
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

// Panggil fungsi
window.addEventListener("load", setActiveMenu);
