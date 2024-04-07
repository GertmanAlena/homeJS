"use strict";

/*
###Задание 1
Необходимо создать класс Library. Конструктор класса, должен принимать начальный 
список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив 
не содержит дубликатов; в противном случае необходимо выбросить ошибку.
1. Класс должен содержать приватное свойство #books, которое должно хранить 
книги, переданные при создании объекта.
2. Реализуйте геттер-функцию allBooks, которая возвращает текущий список книг.
3. Реализуйте метод addBook(title), который позволяет добавлять книгу в список. 
Если книга с таким названием уже существует в списке, выбросьте ошибку с 
соответствующим сообщением.
4. Реализуйте метод removeBook(title), который позволит удалять книгу из списка 
по названию. Если книги с таким названием нет в списке, выбросьте ошибку с 
соответствующим сообщением.
5. Реализуйте метод hasBook(title), который будет проверять наличие книги в 
библиотеке и возвращать true или false в зависимости от того, есть ли такая 
книга в списке или нет.
*/

class Library {
    #books = [];

    constructor(book) {

        const uniqueBooks = new Set(book);

        if (uniqueBooks.size < book.length) {
            throw new Error('Есть дубликаты');
        } else {
            this.#books = book;
        }
    };

    allBooks() {
        return this.#books;
    }

    addBook(title) {
        for (const iterator of books) {
            if (iterator === title) {
                throw new Error('Такая книга уже есть в библиотеке');
            }
        }
        this.#books.push(title);
    }

    removeBook(title) {
        const filteredBooks = books.filter((book) => book !== title);
        console.log(filteredBooks);
        if (filteredBooks.length === books.length) {
            throw new Error('Такой книги нет, чтобы удалить');
        }
        else this.#books = filteredBooks;
    }

    hasBook(title) {
        return this.#books.includes(title);
    }
}

const books = [
    'книга 1',
    'книга 2',
    'книга 3',
    // 'книга 1',
    'книга 4',
    // 'книга 1',
    'книга 8'
]

const library = new Library(books);
console.log(library.allBooks());

library.addBook('newBooks');
console.log(library.allBooks());

library.removeBook('newBooks');
console.log(library.allBooks());

console.log(library.hasBook('книга 10'));