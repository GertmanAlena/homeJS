"use strict";
console.log(` ******** Задание 2 ********\n`);
/*
###Задание 2
Вы управляете рестораном, в котором работают разные повара, специализирующиеся 
на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.
Необходимо реализовать функцию newOrder. Создавать вспомогательные функции, 
коллекции, не запрещается. Старайтесь использовать коллекции Map/Set, где это 
актуально. Представленный ниже код должен работать.

Повара и их специализации:
Олег - специализация: Пицца.
Андрей - специализация: Суши.
Анна - специализация: Десерты.

Блюда, которые могут заказать посетители:
Пицца "Маргарита"
Пицца "Пепперони"
Пицца "Три сыра"
Суши "Филадельфия"
Суши "Калифорния"
Суши "Чизмаки"
Суши "Сеякемаки"
Десерт Тирамису
Десерт Чизкейк
*/

const cooks = [
  { name: "Олег", specialization: "Пицца" },
  { name: "Андрей", specialization: "Суши" },
  { name: "Анна", specialization: "Десерт" },
];

const dishes = [
  { name: "Пицца", specialization: "Маргарита" },
  { name: "Пицца", specialization: "Пепперони" },
  { name: "Пицца", specialization: "Три сыра" },
  { name: "Суши", specialization: "Филадельфия" },
  { name: "Суши", specialization: "Калифорния" },
  { name: "Суши", specialization: "Чизмаки" },
  { name: "Суши", specialization: "Сеякемаки" },
  { name: "Десерт", specialization: "Тирамису" },
  { name: "Десерт", specialization: "Чизкейк" },
];

class Client {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

class Manager {

  clients = new Map();
  newOrder(client, ...theArgs) {
    let flagAdd = true;

    if (examination(theArgs)) {
      // проверка есть ли уже клиенты в Map
      if (this.clients.size > 0) {

        for (const iterator of this.clients) {
          if (client === iterator[0]) {
            for (const newOrder of theArgs) {
              let addDish = true;  // флаг для добавления нового блюда
              for (const oder of this.clients.get(client)) {
                if (newOrder.name === oder.name) {
                  oder.quantity += newOrder.quantity;
                  addDish = false;  // пометили, что не нужно добавлять
                }
              }
              if (addDish) {
                this.clients.get(client).push(newOrder);
              }
            }
            flagAdd = false;
            this.showOrder(client);
            return;
          }
        }
      }
      this.clients.set(client, theArgs);   
      this.showOrder(client);
    } 
  }

  showOrder(client) {
    const ord = manager.clients.get(client);
    console.log(`Клиент ${client.firstname} заказал: `);
    const order = {
      ord,
      [Symbol.iterator]: function* () {
        for (const eat of this.ord) {
          yield `${eat.type} "${eat.name}" - ${eat.quantity}; готовит повар ${getKey(eat.type)}`;
        }
      }
    };
    for (const iterator of order) {
      console.log(iterator);
    }
    console.log(`\n`);
  }
}

/**
 * Метод для проверки наличия в заказе актуальных блюд
 * если в заказе есть блюдо, которого нет в меню, веведен в консоль отказ
 * @param params заказ клинента
 */
function examination(params) {
  let flag = true;

  for (const iterator of params) {
    for (const iteratorDishes of dishes) {
      if (iterator.type === iteratorDishes.name && iterator.name === iteratorDishes.specialization) {
        flag = true;
        break;
      } else {
        flag = false;

      }
    }
    if (!flag) {
      console.error(`ОТКАЗ в оформлении заказа !! ${iterator.type} "${iterator.name}" - такого блюда не существует`);
    }
  }
  return flag;
}

function getKey(val/*значение*/) {
  for (const iterator of cooks) {
    if (iterator.specialization === val) {
      return iterator.name;
    }
  }
}

// Можно передать внутрь конструктора что-либо, если необходимо.
const manager = new Manager();

// Вызовы ниже должны работать верно, менять их нельзя, удалять тоже.
manager.newOrder(
  new Client("Иван", "Иванов"),
  { name: "Маргарита", quantity: 1, type: "Пицца" },
  { name: "Пепперони", quantity: 2, type: "Пицца" },
  { name: "Чизкейк", quantity: 1, type: "Десерт" },
);

// Вывод:
// Клиент Иван заказал: 
// Пицца "Маргарита" - 1; готовит повар Олег
// Пицца "Пепперони" - 2; готовит повар Олег
// Десерт "Чизкейк" - 1; готовит повар Анна

// ---

const clientPavel = new Client("Павел", "Павлов");
manager.newOrder(
  clientPavel,
  { name: "Филадельфия", quantity: 5, type: "Суши" },
  { name: "Калифорния", quantity: 3, type: "Суши" },
);
// Вывод:
// Клиент Павел заказал: 
// Суши "Филадельфия" - 5; готовит повар Андрей
// Суши "Калифорния" - 3; готовит повар Андрей

manager.newOrder(
  clientPavel,
  { name: "Калифорния", quantity: 1, type: "Суши" },
  { name: "Тирамису", quantity: 2, type: "Десерт" },
);
// Вывод:
// Клиент Павел заказал: 
// Суши "Филадельфия" - 5; готовит повар Андрей
// Суши "Калифорния" - 4; готовит повар Андрей
// Десерт "Тирамису" - 2; готовит повар Анна

manager.newOrder(
  clientPavel,
  { name: "Филадельфия", quantity: 1, type: "Суши" },
  { name: "Трубочка с вареной сгущенкой", quantity: 1, type: "Десерт" },
);
// Ничего не должно быть добавлено, должна быть выброшена ошибка:
// Десерт "Трубочка с вареной сгущенкой" - такого блюда не существует.