//кнопки, курсы
const onlinebtn = document.getElementById('view__butt1');
const offlinebtn = document.getElementById('view__butt2');
let slides1 = document.querySelectorAll('.card__course')
let card1 = document.querySelector('.онлайн');
let card2 = document.querySelector('.офлайн');
let index1 = 0;
let img1 = 6;
onlinebtn.addEventListener('click', () => {
    onlinebtn.style.backgroundColor = "#3561FF";
    onlinebtn.style.color = "#FFFFFF";
    offlinebtn.style.backgroundColor = "#FFFFFF";
    offlinebtn.style.color = "#000000";

    card1.style.display = "flex";
    card2.style.display = "none";
  });
offlinebtn.addEventListener('click', () => {
    offlinebtn.style.backgroundColor = "#3561FF";
    offlinebtn.style.color = "#FFFFFF";
    onlinebtn.style.backgroundColor = "#FFFFFF";
    onlinebtn.style.color = "#000000";

    card2.style.display = "flex";
    card1.style.display = "none";
}); 

function widthimg1() {
  const width = window.innerWidth;
  if (width < 890) {
    img1 = 5;
  }
  if(width > 890) {
    img1 = 6;
  };
 }
 window.addEventListener('resize', widthimg1);
 widthimg1();

document.querySelector('#next').addEventListener('click', function () {
   if(index1 < slides1.length - img1){
      ++index1 % slides1.length
      card1.style.transform = 'translatex(' + (-index1 * 380) + "px" + ')'
      card2.style.transform = 'translatex(' + (-index1 * 380) + "px" + ')'
   }
});
document.querySelector('#prev').addEventListener('click', function () {
    if(index1 > 0){
      --index1 + slides1.length % slides1.length
      card1.style.transform = 'translatex(' + (-index1 * 380) + "px" + ')'
      card2.style.transform = 'translatex(' + (-index1 * 380) + "px" + ')'
    }
});


//преподаватели
let slider = document.querySelector('.slider__teacher')
let slides = document.querySelectorAll('.teacher__card')
let index = 0;
let img = 3;

function widthimg() {
  const width = window.innerWidth;
  if (width < 1270) {
    img = 2;
  };
  if (width < 800) {
    img = 1;
  };
  if(width > 1270) {
    img = 3;
  };
 }
 window.addEventListener('resize', widthimg);
 widthimg();
document.querySelector('#nextteach').addEventListener('click', function () {
   if(index < slides.length - img){
      ++index % slides.length
      slider.style.transform = 'translatex(' + (-index * 330) + "px" + ')'
   }
});
document.querySelector('#prevteach').addEventListener('click', function () {
    if(index > 0){
      --index + slides.length % slides.length
      slider.style.transform = 'translatex(' + (-index * 330) + "px" + ')'
    }
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

//отзывы
let slider3 = document.querySelector('.reviews__cards')
let slides3 = document.querySelectorAll('.reviews__images')
let index3 = 0;
let img3 = 2;

function widthimg3() {
  const width = window.innerWidth;
  if (width > 650) {
    img3 = 2;
  };
  if (width < 650) {
    img3 = 1;
  };
 }
 window.addEventListener('resize', widthimg3);
 widthimg3();

document.querySelector('#nextrev').addEventListener('click', function () {
   if(index3 < slides3.length - img3){
      ++index3 % slides3.length
      slider3.style.transform = 'translatex(' + (-index3 * 290) + "px" + ')'
   }
});
document.querySelector('#prevrev').addEventListener('click', function () {
    if(index3 > 0){
      --index3 + slides3.length % slides3.length
      slider3.style.transform = 'translatex(' + (-index3 * 290) + "px" + ')'
    }
});