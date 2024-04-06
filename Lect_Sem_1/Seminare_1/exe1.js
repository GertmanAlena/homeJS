/*
Задание 1: 
Необходимо создать механизм для безопасного добавления метаданных к объектам 
книг с использованием ключей типа Symbol. Для чего необходимо:
1. Создать уникальные символы для метаданных: отзывы, рейтинг, теги.
2. Реализовать методы addMetadata и getMetadata и другие методы, которые будут 
необходимы для работы кода ниже.
*/
 
// Объявляем символы reviewSymbol, ratingSymbol и tagsSymbol

const reviewSymbol = Symbol("reviewSymbol");
const ratingSymbol = Symbol("ratingSymbol");
const tagsSymbol = Symbol("tagsSymbol");
 
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
 
  /**
   * Метод извлекает из объекта значение под свойством metadataType 
   * и возвращает его.
   * @param {Symbol} metadataType 
   * @returns {Array}
   */
  getMetadata(metadataType) {
    if (!this[metadataType]) {
      return [];
    } 
    return this[metadataType];
    
  }
 
  /**
   * Метод добавляет в объект массив под ключом metadataType, со значением 
   * data внутри. Если массив под данным свойством уже существует, 
   * тогда data просто будет добавлен в данный массив.
   * @param {Symbol} metadataType 
   * @param {any} data 
   */
  addMetadata(metadataType, data) {
    if (!this[metadataType]) {
        this[metadataType] = [];
    } 
    this[metadataType].push(data);
    
  }

  getAverageRating() {
    const rating = this.getMetadata(ratingSymbol);
    if (!rating) {
      return null;
    }
    let averageRating = 0;

    for (const iterator of rating) {
      averageRating += iterator;
    }
    return Math.round((averageRating / rating.length) * 10) / 10;

  }

  hasTag(data){
    const tag = this.getMetadata(tagsSymbol);
    if (!tag) {
      return null;
    }

    let result = true;
    
    for (const iterator of tag) {
      if (iterator === data) {
        return result; 
      }
    }
    result = false;
    return result;
  }
  
  reviewsCount(){
    const review = this.getMetadata(reviewSymbol);
    let count = 0;
    if (!review) {
      return null;
    }
    return review.length;
  }

}
 
const book = new Book("1984", "George Orwell");
book.addMetadata(reviewSymbol, "Отличная книга о дистопии!");
book.addMetadata(reviewSymbol, "Книга отстой, не покупайте ее.");
book.addMetadata(ratingSymbol, 5);
book.addMetadata(ratingSymbol, 4);
book.addMetadata(ratingSymbol, 4);

 
// ["Отличная книга о дистопии!", "Книга отстой, не покупайте ее."]
console.log(book.getMetadata(reviewSymbol));
console.log(book.getMetadata(ratingSymbol)); // [5, 4, 4] 
console.log(book.getMetadata(tagsSymbol)); // []

book.addMetadata(tagsSymbol, "novel");
book.addMetadata(tagsSymbol, "dystopia");
console.log(book.getMetadata(tagsSymbol)); // ["novel", "dystopia"]

console.log(book); 

console.log(book.getAverageRating()); // 4.3
console.log(book.hasTag("novel")); // true
console.log(book.hasTag("blockbuster")); // false
console.log(book.reviewsCount()); // 2