/*
    Задание 1: 
        Вы разрабатываете прототип веб-приложения для чтения новостей. Статьи "хранятся" 
        во внутреннем массиве (имитируя базу данных). Когда пользователь нажимает на 
        кнопку "Загрузить новости", ваш код должен имитировать задержку, словно 
        происходит реальная загрузка данных из внешнего источника, а после этой 
        задержки — отображать новости на странице.
        
        1. Создайте базовую HTML-структуру с кнопкой для загрузки новостей и контейнером 
        для их отображения.
        2. Реализуйте функцию fetchNews(), возвращающую промис. Эта функция должна 
        имитировать задержку в 2 секунды перед успешным возвращением данных из 
        "виртуальной" базы данных. Для добавления интереса: с вероятностью 10% она 
        должна возвращать ошибку вместо данных.
        3. При нажатии на кнопку "Загрузить новости" вызывайте функцию fetchNews(), 
        обрабатывая успешное выполнение и ошибки с использованием then() и catch().
        При успешной загрузке отобразите статьи на странице. При ошибке покажите 
        сообщение об ошибке.
        4. Добавьте функционал, который отключает кнопку загрузки на время "загрузки" 
        новостей и активирует её снова после завершения операции (будь то успешная 
        загрузка или ошибка).
*/

const dataProductsJS = JSON.parse(news);

const contentEL = document.querySelector('.content');
const contentNewsEL = document.querySelector('.content__news');
const newsUlEL = document.querySelector('.news__ul');
const buttonEL = document.querySelector('.button__news');
let i = 0;

const fetchNews = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.1) {
                reject(new Error("Ошибка при загрузке новостей"));
            } else {
                resolve(news[i++]);
            }
        }, 3000);
    });
};

buttonEL.addEventListener('click', () => {
    buttonEL.disabled = true;
    fetchNews()
        .then(x => {
            dataProductsJS.forEach(element => {
                const news = document.createElement('li');
                news.classList.add('news__list');
                news.textContent = element.content;
                newsUlEL.append(news);
            });
            
        })
        .catch((error) => {
            alert('ошибка : ', error); 
        })
        .finally(() => {
            buttonEL.disabled = false;
        });

});