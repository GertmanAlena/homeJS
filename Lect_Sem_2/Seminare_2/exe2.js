'use strict';
/*
Задание 2: 
Мы создаем приложение. У нас планируется два вида пользователей, обычные и 
премиум. Общие свойства этих пользователей необходимо вынести в базовый класс.
 
1. Создайте базовый класс User с базовой информацией (имя и фамилия, которые 
должны создаваться при создании экземпляра класса).
2. Создайте классы PremiumUser и RegularUser, которые наследуются от User. Класс
PremiumUser должен иметь свойство premiumExpiration (дата истечения срока
действия премиум аккаунта, должно задаваться при создании объекта), а у 
RegularUser такого свойства нет.
3. Создайте функцию getAccountInfo(user), которая принимает объект класса User 
и возвращает информацию о наличии и сроке действия премиум-аккаунта. Необходимо
использовать instanceof для проверки типа переданного пользователя и дать 
соответствующий ответ из функции (в свободном формате).
*/

class User {

    constructor(userName, userSurname){
        if(this.constructor === User){
            throw new Error('Cannot create instance of abstract class User');
        }
        this.userName = userName;
        this.userSurname = userSurname;
    }

}

class PremiumUser extends User {
    constructor(userName, userSurname, premiumExpiration){
        super(userName, userSurname);
        this.premiumExpiration = premiumExpiration;
    }
}

class RegularUser extends User {

}

function getAccountInfo(user) {
    if(user instanceof PremiumUser){
        console.log(`${user.userName} ${user.userSurname} - премиум аккаунт срок действия: ${user.premiumExpiration}`);
    }
    else if (user instanceof RegularUser) {
        console.log(`${user.userName} ${user.userSurname} - обычный аккаунт`);
    } else {
        console.log('Ошибка');
    }
}

const user1 = new PremiumUser("Vika", "Ivanova", 2025);
const user2 = new RegularUser("Lena", "Ivanova");

getAccountInfo(user1);
getAccountInfo(user2);
getAccountInfo({});