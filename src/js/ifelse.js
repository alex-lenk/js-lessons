"use strict";

/*
 var year = prompt('In what year there a ECMA-262 5.1 specification?', '');

 if (year < 2011) {
 alert('This is too early');
 } else if (year > 2011) {
 alert('It is too late');
 } else {
 alert('The correct answer.')
 }
 */

/*var age = prompt('How old are you?', '');

 var access = age >= 14;

 alert(access);*/

/*var age = prompt('Yor age?', '18');

 var message = (age <= 3) ? 'Hello, baby!' :
 age >= 18 ? 'Hi!' :
 age <= 100 ? 'Hello':
 'What an extraordinary age';

 alert(message);*/

/* the task 1
 * Да, строка с alert выведется


 if ("0") {
 alert('Привет');
 }
 */

/* the task 2

 var companyName = prompt('Каково «официальное» название JavaScript?');

 if (companyName == 'ECMAScript' || companyName == 'ecmascript') {
 alert('Верно!');
 } else {
 alert('Не знаете? Это «ECMAScript»!')
 }
 */

/* the task 3*/

var loginName = prompt('Введите логин: ');

if (loginName == 'Админ') {

    var passwordAdmin = prompt('Введите пароль: ');

    if (passwordAdmin == 'Чёрный Властелин') {
        alert('Добро пожаловать!');
    } else if (passwordAdmin == null) {
        alert('Вход отменён');
    } else {
        alert('Пароль неверен');
    }
} else if (loginName == null) {
    alert('Вход отменён');
} else {
    alert('Я вас не знаю');
}


/* the task 4
 var result = (a + b < 4) ? 'мало' : 'Много';
 */

/* the task 5

 var login = prompt('Введите логин: ', '');

 var message = (login == 'Вася') ? 'Привет' :
 (login == 'Директор') ? 'Здравствуйте' :
 (login == '') ? 'Нет логина!' :
 (login == null) ? 'Вы нажали отмену' :
 'Вы не правильно ввели логин';

 alert(message);
 */
