"use strict";

/*
###Задание 2
Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут 
оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные 
сообщения, вы решаете установить ограничение, отзыв должен быть не менее 50 
символов в длину и не более 500. В случае неверной длины, необходимо выводить 
сообщение об ошибке, рядом с полем для ввода.

Создайте HTML-структуру. 
На странице должны отображаться товары, под каждым товаром должен быть список 
отзывов на данный товар. Под каждым списком отзывов должна быть форма, где можно
добавить отзыв для продукта.

При добавлении отзыва, он должен отображаться на странице под предыдущими 
отзывами, а не заменять их.
Массив initialData должен использоваться для начальной загрузки данных 
при запуске вашего приложения.

Каждый отзыв, как и продукт, должен иметь уникальный id, для упрощения, используем 
функцию `uid()`, она нам будет возвращать случайный id в виде небольшой строки.

ВНИМАНИЕ! Если вы не проходили на курсе работу с DOM, то можно это задание не 
делать, пока рано.
*/

function uid() {
  return Math.random().toString(36).slice(2);
}

const initialData = [
  {
    id: uid(),
    product: "Гербера",
    image: "./image/Гербера.jpg",
    reviews: [
      {
        id: uid(),
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: uid(),
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    id: uid(),
    product: "Роза",
    image: "./image/роза.jpg",
    reviews: [
      {
        id: uid(),
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    id: uid(),
    product: "Ромашка",
    image: "./image/ромашка.jpg",
    reviews: [
      {
        id: uid(),
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];

const contentEl = document.querySelector('.content');

initialData.forEach(data => {
  const cardEl = document.createElement("div");
  cardEl.classList.add('card');
  cardEl.id = data.id;

  const headingEl = document.createElement('h1');
  headingEl.classList.add('card__title');
  headingEl.textContent = data.product;

  const imageEl = document.createElement('img');
  imageEl.classList.add('card__img');
  imageEl.src = data.image;
  const altImage = `image`;
  imageEl.setAttribute('alt', altImage);

  const reviewsDivEl = document.createElement("div");
  reviewsDivEl.classList.add('card__review');

  const reviewFormEl = document.createElement('form');
  const reviewInputEl = document.createElement('input');
  reviewInputEl.setAttribute('type', 'text');
  reviewInputEl.setAttribute('placeholder', 'Ваш отзыв');
  const reviewButtonEl = document.createElement('button');
  reviewButtonEl.setAttribute('type', 'submit');
  reviewButtonEl.innerText = "Отправить";
  reviewButtonEl.classList.add('review__button');
  const errorEl = document.createElement('p');
  errorEl.classList.add('review__error');

  reviewsDivEl.append(errorEl);
  const reviewTextDivEl = document.createElement("div");
  reviewTextDivEl.classList.add('card__review__text');
  
  reviewsDivEl.append(reviewFormEl, reviewInputEl, reviewButtonEl, reviewTextDivEl);

  data.reviews.forEach(element => {
    const reviewEl = document.createElement('p');
    reviewEl.id = element.id;
    reviewEl.textContent = element.text;

    reviewTextDivEl.append(reviewEl);
  });

  reviewButtonEl.addEventListener('click', (e) => {
    e.preventDefault()
    try {
      const userInput = reviewInputEl.value;
      if (userInput.length < 50 || userInput.length > 500) {
        const textError = "Длина введенного значения не соответствует требованиям!";
        reviewInputEl.value = '';
        errorEl.textContent = textError;
        
        throw new Error(textError);
      }
      
      const newReviewEl = document.createElement('p');
      newReviewEl.id = uid();
      newReviewEl.textContent = reviewInputEl.value;
      reviewTextDivEl.append(newReviewEl);
      reviewInputEl.value = '';

    } catch (error) {
      
    }
  });

  contentEl.append(cardEl);
  cardEl.append(headingEl, imageEl, reviewsDivEl);
});
