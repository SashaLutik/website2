//курсы
const sliderImages = document.getElementById('sliderImages');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let position = 0;
nextBtn.addEventListener('click', () => {
  position -= 840;
  if(position < -840) {
    position = 0;
  }
  sliderImages.style.transform = `translateX(${position}px)`;
  });
prevBtn.addEventListener('click', () => {
  position += 840;
  if(position > 0) {
    position = 0;
  }
  sliderImages.style.transform = `translateX(${position}px)`;
});
//адаптив
const sliderImages2 = document.getElementById('sliderImages2');
const prevBtn2 = document.getElementById('prev');
const nextBtn2 = document.getElementById('next');
let position2 = 0;
nextBtn.addEventListener('click', () => {
  position2 -= 420;
  if(position2 < -1260) {
    position2 = 0;
  }
  sliderImages2.style.transform = `translateX(${position2}px)`;
  });
prevBtn2.addEventListener('click', () => {
  position2 += 420;
  if(position2 > 0) {
    position2 = 0;
  }
  sliderImages2.style.transform = `translateX(${position2}px)`;
});

//кнопки
const onlinebtn = document.getElementById('view__butt1');
const offlinebtn = document.getElementById('view__butt2');
onlinebtn.addEventListener('click', () => {
    onlinebtn.style.backgroundColor = "#3561FF";
    onlinebtn.style.color = "#FFFFFF";
    offlinebtn.style.backgroundColor = "#FFFFFF";
    offlinebtn.style.color = "#000000";
  });
offlinebtn.addEventListener('click', () => {
    offlinebtn.style.backgroundColor = "#3561FF";
    offlinebtn.style.color = "#FFFFFF";
    onlinebtn.style.backgroundColor = "#FFFFFF";
    onlinebtn.style.color = "#000000";
}); 

const buttons = document.querySelectorAll('.view__butt1');
const yellowitems = document.querySelectorAll('.yellow__butt');
const reditems = document.querySelectorAll('.red__butt');
const greenitems = document.querySelectorAll('.green__butt');
const blueitems = document.querySelectorAll('.blue__butt');
const orangeitems = document.querySelectorAll('.orange__butt');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    yellowitems.forEach(item => {
            if (item.classList.contains(filter)) {
            item.style.display = 'block';
            } else {
            item.style.display = 'none';
            }
    });
    reditems.forEach(item => {
          if (item.classList.contains(filter)) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
    });
    greenitems.forEach(item => {
          if (item.classList.contains(filter)) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
    });
    blueitems.forEach(item => {
          if (item.classList.contains(filter)) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
    });
    orangeitems.forEach(item => {
          if (item.classList.contains(filter)) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
    });
  });
});

//преподаватели
const sliderTeachers = document.getElementById('sliderTeacher');
const prev = document.getElementById('prevteach');
const next = document.getElementById('nextteach');
let position3 = 0;
next.addEventListener('click', () => {
  position3 -= 335;
  if(position3 < -670) {
    position3 = 0;
  }
  sliderTeachers.style.transform = `translateX(${position3}px)`;
  });
  prev.addEventListener('click', () => {
  position3 += 335;
  if(position3 > 0) {
    position3 = 0;
  }
  sliderTeachers.style.transform = `translateX(${position3}px)`;
});
//адаптив
const sliderTeachers2 = document.getElementById('sliderTeacher2');
const prev2 = document.getElementById('prevteach');
const next2 = document.getElementById('nextteach');
let position4 = 0;
next2.addEventListener('click', () => {
  position4 -= 335;
  if(position4 < -1070) {
    position4 = 0;
  }
  sliderTeachers2.style.transform = `translateX(${position4}px)`;
  });
  prev2.addEventListener('click', () => {
  position4 += 335;
  if(position4 > 0) {
    position4 = 0;
  }
  sliderTeachers2.style.transform = `translateX(${position4}px)`;
});

const sliderTeachers3 = document.getElementById('sliderTeacher3');
const prev3 = document.getElementById('prevteach');
const next3 = document.getElementById('nextteach');
let position5 = 0;
next3.addEventListener('click', () => {
  position5 -= 336;
  if(position5 < -1344) {
    position5 = 0;
  }
  sliderTeachers3.style.transform = `translateX(${position5}px)`;
  });
  prev3.addEventListener('click', () => {
  position5 += 336;
  if(position5 > 0) {
    position5 = 0;
  }
  sliderTeachers3.style.transform = `translateX(${position5}px)`;
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