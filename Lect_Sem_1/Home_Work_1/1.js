"use strict";

/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать. 
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция 
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и 
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/
console.log(" ******** Задание 1 ******** ");
const musicCollection = [
  { title: "Nevermind", author: "Nirvana", year: "1991" },
  { title: "In Utero", author: "Nirvana", year: "1993" },
  { title: "Master of Puppets", author: "Metallica", year: "1986" },
  { title: "Metallica", author: "Metallica", year: "1991" },
  { title: "Smash", author: "The Offspring", year: "1994" },
];

const libraryMusic = {
  musicCollection,  //books: books,
    [Symbol.iterator]: function* () {
        for (const music of this.musicCollection) {
            yield music;
        }
    }
};
for (const iterator of libraryMusic) {
    console.log(`${iterator.title} - ${iterator.author} (${iterator.year})`);
}