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

const cardEl = document.querySelectorAll('.card');
// const reviewsEl = document.querySelectorAll('.reviews');
// const itemListEl = document.querySelectorAll('.item-list');
const reviewsInputEl = document.querySelectorAll('.reviews-input');
const checkButtonInputEl = document.querySelectorAll('.check-button');
const messageEl = document.querySelectorAll('.error-message');
const cardTitleEl = document.querySelectorAll('.card__title');
const liEl = document.createElement('li');

function uid() {
  return Math.random().toString(36).slice(2);
}

const initialData = [
  {
    id: uid(),
    product: "Гербера",
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
    reviews: [
      {
        id: uid(),
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];

cardEl.forEach(element => {
  console.log(element);
  const reviewsEl = element.querySelector('.reviews');
  const cardTitleEl = document.querySelector('.card__title');
  // console.log(reviewsEl);
  // console.log(cardTitleEl.innerText);
  initialData.forEach(data => {
    // console.log(data.product);

    if(cardTitleEl.innerText === data.product){
      element.id = data.id;

      data.reviews.forEach(review => {
        liEl.textContent = review.text;
        liEl.id = review.id;
        // reviewsEl.id = reviews.id;
        console.log(review);
        const itemListEl = document.querySelector('.item-list');
        itemListEl.append(liEl);
      });
      
      
    }
  });
});



function idReviews() {
  for (const iterator of initialData) {
    return iterator.reviews[0].id;
  }
}

// checkButtonInputEl.addEventListener('click', () => {
//   try {
//     const userInput = reviewsInputEl.value;
//     if (userInput.length < 50 || userInput.length > 500) {
//       reviewsInputEl.value = '';
//       messageEl.textContent = '';
//       throw new Error('Длина введенного значения не соответствует требованиям!');
      
//     }
    
//     liEl.textContent = userInput;
//     itemListEl.append(liEl);
//     reviewsInputEl.value = '';
//     messageEl.textContent = '';
//   } catch (error) {
//     messageEl.textContent = error.message;
//   } finally {
//     console.log('Попытка добавления элемента завершена!');
//   }
// });


