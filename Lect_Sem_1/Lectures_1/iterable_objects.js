const string = 'Hello';

console.log(string[2]); // l
console.log(string.length); // 5

for (let str of string){
    console.log(str); 
}

console.log("*******************");

let range = {
    from: 1,
    to: 7
}

// 1. вызов for..of сначала вызывает эту функцию
range[Symbol.iterator] = function(){
    // ... она возвращает объект итератора:
    // 2. Далее, for(..of..) работает только с этим итератором, запрашивая у него новые значения
    return {
        current: this.from,
        last: this.to,

        // 3. next() вызывается на каждой итерации цикла for(..of..)
        next(){
            // 4. он должен вернуть значение в виде объекта {done:.., value: ...}
            return this.current <= this.last ? { done: false, value: this.current++ } :
            { done: true };
        }
    }
};

for (let number of range){
    console.log(number);
}

// тоже, но всё в одной переменной range

let range2 = {
    from: 1,
    to: 5,
    [Symbol.iterator]() {
        this.current = this.from;
        return this;
    },
    next(){
        return this.current <= this.to ? { done: false, value: this.current++ } :
        { done: true };
    }
}
for (let number of range2){
    console.log(number);
}

//************** Array.from *********************/
console.log('*******************');

let pseudo = {
    0: 'first',
    1: 'last',
    2: 'new element',
    length: 3
}

let array = Array.from(pseudo);
console.log(array);
console.log(array.pop());

console.log('*******************');

let text = 'It`s a string';
let text2 = Array.from(text);
console.log(text2); // (13) ['I', 't', '`', 's', ' ', 'a', ' ', 's', 't', 'r', 'i', 'n', 'g']
