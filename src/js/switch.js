"use strict";

/*
var a = 2 + 2;

switch (a) {
    case 3:
        alert(' маловато');
        break;
    case 4:
        alert('В точку');
        break;
    case 5:
        alert('Перебор');
        break;
    default:
        alert('я таких значений не знаю');
}
*/

/*
var arg = prompt("Введите arg?");

switch (arg) {
    case '0':
    case '1':
        alert( 'Один или ноль' );
    case '2':
        alert( 'Два' );
        break;
    case 3:
        alert( 'Никогда не выполнится' );
    default:
        alert('Неизвестное значение: ' + arg)
}

switch (browser) {
    case 'IE':
        alert( 'О, да у вас IE!' );
        break;

    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        alert( 'Да, и эти браузеры мы поддерживаем' );
        break;

    default:
        alert( 'Мы надеемся, что и в вашем браузере все ок!' );
}

var browser = prompt('Какой у вас браузе?', '');
if (browser == 'IE') {
    alert( 'О, да у вас IE!' );
} else if (browser == 'Chrome'
    || browser == 'Firefox'
    || browser == 'Safari'
    || browser == 'Opera') {
    alert( 'Да, и эти браузеры мы поддерживаем' );
} else {
    alert( 'Мы надеемся, что и в вашем браузере все ок!' );
}
*/

var a = +prompt('a?', '');

switch (a) {
    case 0:
        alert( 0 );
        break;

    case 1:
        alert( 1 );
        break;

    case 2:
    case 3:
        alert( '2,3' );
        break;

    default:
        alert( 'Вы не указали цифру' );
}
