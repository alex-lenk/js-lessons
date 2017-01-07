"use strict";

/* ==== prompt ==== */

/* Функция isNumeric
 * Точная проверка на число, которая не считает числом строку из пробелов,
 * логические и специальные значения,
 * а также отсекает Infinity:
 */
/*function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

 var years = prompt('How old are you?', '');

 if (isNumeric(years) != false) {
    alert('You ' + years + ' years');
} else {
    alert('You did not indicate your age, please indicate your age');
}*/


/* ==== confirm ==== */

/*
var isAdmin = confirm('You are the administrator?');

alert(isAdmin);
*/

/* ==== the task ==== */

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

var yourName = prompt('Your name?', '');

if (isNumeric(yourName) != false) {
    alert('You do not call your name');
} else {
    alert('Your name - ' + yourName);
}
