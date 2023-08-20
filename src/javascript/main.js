const navNavbar = document.getElementById("nav-navbar");
const searchBox = document.getElementById("textBox");
const searchButton = document.getElementById("searchBox");
const closeButton = document.getElementById("closeButton");
const dropDownButton = document.getElementById("dropDown");

navNavbar.addEventListener("click", () => {
  dropDownButton.classList.toggle("dropdown-container");

  if (dropDownButton.style.display == "none") {
    dropDownButton.style.display = "flex";
  } else {
    dropDownButton.style.display = "none";
  }
});

searchButton.addEventListener("click", () => {
  navNavbar.style.display = "none";
  searchButton.style.display = "none";
  searchBox.style.display = "flex";
});

closeButton.addEventListener("click", () => {
  navNavbar.style.display = "flex";
  searchButton.style.display = "flex";
  searchBox.style.display = "none";
});
