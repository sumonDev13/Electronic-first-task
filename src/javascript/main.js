const navNavbar = document.getElementById("nav-navbar");
const searchBox = document.getElementById("textBox");
const searchBtn = document.getElementById("searchBox");
const closeBtn = document.getElementById("closeButton");
const dropDownBtn = document.getElementById("dropDown");

navNavbar.addEventListener("click", () => {
  dropDownBtn.classList.toggle("dropdown-container");

  if (dropDownBtn.style.display == "none") {
    dropDownBtn.style.display = "flex";
  } else {
    dropDownBtn.style.display = "none";
  }
});

searchBtn.addEventListener("click", () => {
  navNavbar.style.display = "none";
  searchBtn.style.display = "none";
  searchBox.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  navNavbar.style.display = "flex";
  searchBtn.style.display = "flex";
  searchBox.style.display = "none";
});
