const navNavbar = document.getElementById("nav-navbar");
const searchBox = document.getElementById("text-container");
const searchBtn = document.getElementById("search-bar");
const closeBtn = document.getElementById("close-button");
const dropDownBtn = document.getElementById("drop-down");

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
