//меню
const menuButton = document.querySelector(".menu__icon");
const dropdown = document.getElementById("dropdown");
menuButton.addEventListener('click', () => {
dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});
document.addEventListener('click', (event) => {
  if (!menuButton.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.style.display = 'none';
  }
});

function save() {
  const lastnameform = document.getElementById('lastname').value;
  const firstnameform = document.getElementById('firstname').value;
  const middlenameform = document.getElementById('middlename').value;
  const year = document.getElementById('year').value;
  if (lastnameform && firstnameform && middlenameform && year){
  const a = document.getElementById('lastNames');
  const b = document.getElementById('firstNames');
  const c = document.getElementById('middleNames');
  const d = document.getElementById('age');
  a.innerHTML = `${lastnameform}`;
  b.innerHTML = `${firstnameform}`;
  c.innerHTML = `${middlenameform}`;
  d.innerHTML = `Возраст: ${year}`;
  };
}
