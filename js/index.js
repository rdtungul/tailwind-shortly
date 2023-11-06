// automatically updated calendar year.
const year = new Date().getFullYear();
document.getElementsByClassName("auto-year")[0].textContent = `© ${year}`;
// console.log(year);

// Mobile menu functionality
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
btn.addEventListener("click", navToggle);
function navToggle() {
  // console.log("clicked!");
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
}
