// automatically updated calendar year.
const year = new Date().getFullYear();
document.getElementsByClassName("auto-year")[0].textContent = `© ${year}`;
// console.log(year);

// Form validation errors functionality.
const linkForm = document.getElementById("link-form");
const input = document.getElementById("link-input");
const errorMsg = document.getElementById("error-msg");

linkForm.addEventListener("submit", formSubmit);

// Validate a URL
function validURL(str) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
      "((\\d{1,3}\\.){3}\\d{1,3}))" +
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
      "(\\?[;&a-z\\d%_.~+=-]*)?" +
      "(\\#[-a-z\\d_]*)?$",
    "i"
  );
  return !!pattern.test(str);
}

function formSubmit(e) {
  e.preventDefault();
  if (input.value === "") {
    errorMsg.innerHTML = "Please enter a link";
    input.classList.add("border-red");
  } else if (!validURL(input.value)) {
    errorMsg.innerHTML = "Please enter a valid URL";
    input.classList.add("border-red");
  } else {
    errorMsg.innerHTML = "";
    input.classList.remove("border-red");
    alert("Successfully shortened!");
  }
}

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
