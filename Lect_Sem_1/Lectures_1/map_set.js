// Map
// Map — это коллекция ключ/значение, как и Object. Но основное отличие в том, что
// Map позволяет использовать ключи любого типа.
// Методы и свойства:
// ● new Map() — создаёт коллекцию
// ● map.set(key, value) — записывает по ключу key значение value
// ● map.get(key) — возвращает значение по ключу или undefined, если ключ key
// отсутствует
// ● map.has(key) — возвращает true, если ключ key присутствует в коллекции, иначе
// false
// ● map.delete(key) — удаляет элемент (пару «ключ/значение») по ключу key
// ● map.clear() — очищает коллекцию от всех элементов
// ● map.size — возвращает текущее количество элементов


let map = new Map();

map.set('1', 'str1');
map.set(1, 'num1');
map.set(true, 'bool1');

console.log(map);

console.log(map.get(1));    // num1
console.log(map.get('1'));  // str1
console.log(map.size);      // 3

// get set
// Set
// Объект Set — это особый вид коллекции: «множество» значений (без ключей), где
// каждое значение может появляться только один раз.
// Его основные методы это:
// ● new Set(iterable) — создаёт Set, и если в качестве аргумента был предоставлен
// итерируемый объект (обычно это массив), то копирует его значения в новый Set
// ● set.add(value) — добавляет значение (если оно уже есть, то ничего не делает),
// возвращает тот же объект set
// ● set.delete(value) — удаляет значение, возвращает true, если value было во
// множестве на момент вызова, иначе false
// ● set.has(value) — возвращает true, если значение присутствует во множестве,
// иначе false
// ● set.clear() — удаляет все имеющиеся значения
// ● set.size — возвращает количество элементов во множестве

let mapGetSet = new Map();
mapGetSet.set("1", "We")
    .set(1, "likes")
    .set(true, "JS");

console.log(mapGetSet);

// перебор коллекции Map

console.log('*******************');

let recipeMap = new Map([
    ["огурец", 500],
    ["томат", 350],
    ["лук", 50]
]);
console.log(recipeMap);

// перебор 

for (let vegetable of recipeMap.keys()) {
    console.log(vegetable);     // выведет ключи
}

for (let vegetable of recipeMap.values()) {
    console.log(vegetable);     // выведет значения
}

for (let vegetable of recipeMap) {
    console.log(vegetable);     // выведет ключ: значение
}

recipeMap.forEach((values, key, map) => {
    console.log(`${key}: ${values}`); // огурец: 500 и т.д.
    }
);

// Работа с объектами

// let mapObject = new Map(Object.entries(obj)); // Object.entries поможет создать Map
// let obj = Object.fromEntries(mapObject);      // Object.fromEntries поможет создать объект из Map

// *********** Set *********
console.log('*******************');

let buddies = [
    'Жучка',
    'Тузик',
    'Жучка',
    'Капа',
    'Мальта',
    'Тузик',
    'Булька'
];

let uniqueBuddies = new Set(buddies);
console.log(uniqueBuddies); // не повторит две Жучки и Тузик

// обратно в массив Array.from
console.log('********* обратно в массив Array.from **********');

let buddies2 = [
    'Жучка',
    'Тузик',
    'Жучка',
    'Капа',
    'Мальта',
    'Тузик',
    'Булька'
];
let uniqueBuddies2 = new Set(buddies); // убрали дубликаты
console.log(uniqueBuddies2);

let arr = Array.from(uniqueBuddies2); //// в массив без дубликатов
console.log(arr);