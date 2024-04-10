// Промисы. Хранилище

// Напишите функцию generateRandomNumber(), которая возвращает Promis, выполняющая через 1 секунду и резолвит случайное число от 1 до 10. Если возникла ошибка при генерации числа, Promis должен быть отклонен с сообщением об ошибке.

let generateRandomNumber = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 10) + 1;
            if (randomNumber) {
                resolve(randomNumber);
            } else {
                reject("Ошибка генерации случайного числа");
            }
        }, 1000);

    });
};

// вызов метода
generateRandomNumber()
    .then((number) => {
        console.log('Сгенерированное число: ', number);
    })
    .catch((error) => {
        console.log('Ошибка: ', error);
});

// Напишите функцию fetchData(url), которая принимает URL в качестве аргумента и возвращает Promise, выполняющий запрос данных по указанному URL. Если запрос завершается успешно, Promise должен резолвить полученные данные. В случае ошибки запроса, Promise доложен быть отклонен с сообщением об ошибке.

let fetchData = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => resolve(data))
            .catch((error) => reject('Error'));
    });
};

https://randombig.cat/roar.json
fetchData('https://randombig.cat/roar.json')
    .then((data) => {
        console.log('Получены данные: ', data);
    })
    .catch((error) => {
        console.log('Ошибка: ', error.message);
    });

// Напишите функцию checkFileExists(file), которая принимает имя файла в качестве аргумента и возвращает Promise, выполняющийся через 2 секунды. Promise должен разолвиться, если файл существует, и отклониться, если файла нет

let checkIfFileExists = (file) => {
    
}

let checkFileExists = (file) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const filePath = checkIfFileExists(file);
            if (filePath) {
                resolve('Файл есть');
            } else {
                reject('Фаайла нет');
            }
        }, 2000)
    });
};

checkFileExists('example.txt')
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log('Ошибка: ', error);
    });
;

// then без cetch 

const calculateDiv = (a, b) => {
    return new Promise((resolve, reject) => {
        if(b === 0){
            reject('На ноль не делим');
        } else {
            resolve(a / b);
        }
        
    });
};

calculateDiv(10, 0)
    .then((result) => {
        console.log(result);
    })
    .catch((err) =>{
        console.log('ошибка : ' + err);
    });

// finally

let processData = (data) => {
    
}

let performOperation = (data) => {
    return new Promise((resolve, reject) => {
        let result = processData(data);
        if (result) {
            resolve(result);
        } else {
            reject("Error");
        }
    }).finally(() => {
        console.log('Операция завершена');
    });
};

performOperation('example')
    .then((result) => {
        console.log('Результат операции: ' + result);
    })
    .catch((error) => {
        console.log('ошибка : ', error); // из 110 строки
    });

// Promise.all

Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
])
    .then(console.log)
    .catch(console.log)

// Приложение, которое отправляет запрос к разным серверам и определяет какой быстрее ответит.

let checkServer = (urls) => {
    let promises = urls.map((url) => fetch(url));
    
    return Promise.race(promises)
        .then((response) => {
            return response.url;
        });
};

let urls = [
    'https://api.example.com/server1',
    'https://api.example.com/server2',
    'https://api.example.com/server2'
];

checkServer(urls)
    .then((fastesServer) => {
        console.log('Самый быстрый: ' + fastes);
    })
    .catch((error) => {
        console.log('Ошибка: ' + error);
    });