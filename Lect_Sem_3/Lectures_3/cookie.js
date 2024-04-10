// Функция, которая устанавливает cookie с указанным именем, значением и сроом действия

let setCookie = (name, value, days) => {
    let exDate = new Date();
    exDate.setDate(exDate.getDate() + days);

    let cookieValue = encodeURIComponent(value) + '; expires=' + exDate.toUTCString();
    document.cookie = name + '=' + cookieValue;
}

setCookie('username', 'John', 7);
setCookie('userinfo2', 'Mister', 5);
setCookie('userinfo', 'Mister2', 25); 

// возвращает значение Cookie

let getCookie = (name) => {
    let cookies = document.cookie.split(';');
    for (const cookie of cookies) {
        let [cookieName, cookieValue] = cookie.trim().split('=');
        if (cookieName === name) {
            return decodeURIComponent(cookieValue);
        }
    }
    return null;
};

let userName = getCookie('username');
console.log(userName);

// удаление Cookie

let deleteCookie = (name) => {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/'; 
};
deleteCookie('userInfo');
deleteCookie('userinfo2');