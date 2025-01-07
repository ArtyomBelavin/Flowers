const slider1 = document.getElementById('btn__prev');
const slider2 = document.getElementById('btn__next');

let text = document.getElementById('slider__text');

let numText = 1;
slider2.onclick = () => {
  numText += 1;

  if (numText <= 3) {
    text.innerHTML = `${numText} из 3`;
  } else {
    numText = 3;
    text.innerHTML = `${numText} из 3`;
  }

  console.log(numText);
};

slider1.onclick = () => {
  numText -= 1;

  if (numText >= 1) {
    text.innerHTML = `${numText} из 3`;
  } else {
    numText = 1;
    text.innerHTML = `${numText} из 3`;
  }
};

const burger = document.querySelector('.burger');
const mainMenu = document.querySelector('.main__menu');
const basketMenu = document.querySelector('.menu__basket');

// Добавляем событие клика на бургер
burger.addEventListener('click', () => {
  burger.classList.toggle('active'); // Анимация бургера
  mainMenu.classList.toggle('active'); // Показать/скрыть основное меню
  basketMenu.classList.toggle('active'); // Показать/скрыть корзину
});

// Закрытие меню при клике на ссылку
document.querySelectorAll('.menu__link').forEach((link) => {
  link.addEventListener('click', () => {
    burger.classList.remove('active');
    mainMenu.classList.remove('active');
    basketMenu.classList.remove('active');
  });
});
