// Установка значения в LocalStorage
localStorage.setItem('username', 'John');

// Получение значения
let username = localStorage.getItem('username');
console.log(username);

// Удаление
localStorage.removeItem('username');

// Проверка, что удалено
let username2 = localStorage.getItem('username');
console.log(username2);

// очистка localStorage
localStorage.clear();

// Проверка, что localStorage пустой
console.log(localStorage);