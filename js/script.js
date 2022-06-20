// Header
// Header sector
let nav = document.querySelector(".navbar");
let header = document.querySelector(".header");
let backTop = document.querySelector(".back-to-top");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 100) {
    nav.classList.add("header-scrolled");
    header.classList.add("header-border");
    backTop.style.display = "block";
  } else {
    nav.classList.remove("header-scrolled");
    header.classList.remove("header-border");
    backTop.style.display = "none";
  }
}
// Back to top

backTop.addEventListener('click', () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

