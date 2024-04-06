const symbol = Symbol();        // объявление
const dogID = Symbol('super dog');    // значение уникально

const dog1 = Symbol('dog'); 
const dog2 = Symbol('dog'); 

console.log(dog1 === dog2);     // false

// alert(dogID); //TypeError не переводит в string

console.log(dogID);     // Symbol(dog)

console.log(dogID.description); // super dog

//**************************/

let id = Symbol('dogID');

let buddy = {
    [id]: 'Бетти'
}

console.log(buddy[id]); //Бетти

buddy[id] = 'Чейза';
console.log(buddy[id]); //Чейза

//***********************************/
console.log('*******************');
let buddies = {
    [Symbol('Жучка')]: 'Жучка',
    [Symbol('Мурка')]: 'Мурка',
    [Symbol('Кузя')]: 'Кузя',
    elephant: 'Слон'
};

console.log(buddies);

let newBuddies = {};
Object.assign(newBuddies, buddies); // копирование

buddies.cat = 'Барсик'; //добавить кота только в buddies
console.log(buddies);

console.log(newBuddies);

//************** Symbol.for *********************/
console.log('*******************');

// читаем символ из глобального реестра и записываем его в переменную
let idFor = Symbol.for("id");      // если символа не существует, он будет  создан   

let idForAgain = Symbol.for("id"); // читаем и снова записываем в другую переменную

// alert(idFor === idForAgain); //true

//************** Symbol.keyFor *********************/
console.log('*******************');

// описание символа по идентификатору
// получаем символ по имени
let sym = Symbol.for("name");  
let sym2 = Symbol.for("id"); 

// получаем имя по символу
console.log(Symbol.keyFor(sym));    // name
console.log(Symbol.keyFor(sym2));   // id