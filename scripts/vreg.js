const menuButton = document.querySelector(".menu__btn");
const dropdownmenu = document.getElementById("dropdownmenu");
menuButton.addEventListener("click", () => {
    dropdownmenu.style.display = dropdownmenu.style.display === "block" ? "none" : "block";
});
document.addEventListener('click', (e) => {
  if (!menuButton.contains(e.target) && !dropdownmenu.contains(e.target)) {
    dropdownmenu.style.display = 'none';
  }
});