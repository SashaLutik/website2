const buttonshow1 = document.querySelector('.lern__butt');
const text1 = document.getElementById('part__hidden');
const buttonhide1 = document.querySelector('.lern__butt__hide')
buttonshow1.addEventListener('click', () => {
    text1.classList.toggle('show');
    buttonshow1.style.display='none';
});
buttonhide1.addEventListener('click', () => {
    text1.classList.toggle('show');
    buttonshow1.style.display='block';
});

const buttonshow2 = document.querySelector('.lern__butt2');
const text2 = document.getElementById('part__hidden2');
const buttonhide2 = document.querySelector('.lern__butt__hide2')
buttonshow2.addEventListener('click', () => {
    text2.classList.toggle('show');
    buttonshow2.style.display='none';
});
buttonhide2.addEventListener('click', () => {
    text2.classList.toggle('show');
    buttonshow2.style.display='block';
});

const buttonshow3 = document.querySelector('.lern__butt3');
const text3 = document.getElementById('part__hidden3');
const buttonhide3 = document.querySelector('.lern__butt__hide3')
buttonshow3.addEventListener('click', () => {
    text3.classList.toggle('show');
    buttonshow3.style.display='none';
});
buttonhide3.addEventListener('click', () => {
    text3.classList.toggle('show');
    buttonshow3.style.display='block';
});
//меню
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