/*
Часто при работе с DOM мы сталкиваемся с коллекциями элементов, которые не 
являются стандартными массивами, но похожи на них. Однако у таких коллекций 
нет методов массива, и здесь на помощь приходит Array.from. В этом задании вы 
научитесь конвертировать коллекции DOM-элементов в массивы и работать с ними.
 
Задание 3: 
Напишите функцию, которая собирает все элементы <div> на странице, преобразует 
их в массив и фильтрует только те из них, у которых есть атрибут data-active.
Выведите отфильтрованный результат в консоль.
*/

const divEl = document.querySelectorAll('div');
console.log(divEl);

const divArray = Array.from(divEl);
const divArray2 = [...divEl];   // то же что и в 16 строке перевод в массив

const resultFilter = divArray.filter((alem) => {
    return alem.hasAttribute("data-active");
})

console.log(resultFilter);