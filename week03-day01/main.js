console.log('in main.js');
var o = {};
var s = '';
var b = true;
var n = 1;
var a = [];
console.log('--- Using "typeof" operator:');
console.log(typeof o);
console.log(typeof s);
console.log(typeof b);
console.log(typeof n);
console.log(typeof a);

console.log('--- Playing with different types:');
var numberAsString = '5';
var number1 = 3;
var number2 = 7;
console.log(numberAsString + number1);
console.log(typeof (numberAsString + number1));
console.log(number1 + numberAsString);
console.log(typeof (number1 + numberAsString));
console.log(number1 + number2);
console.log('Harry' + 'Potter');
console.log('Harry' - 'Potter');
console.log(parseInt(numberAsString));
console.log(parseInt(numberAsString) + number1 + number2);
console.log(parseInt(3.1415927));
console.log(parseInt('3.1415927'));
console.log(parseInt(3.56));
console.log(parseFloat(3.1415927));
console.log(parseFloat('3.1415927'));
console.log(parseFloat(3.56));
console.log(parseFloat('blah'));

console.log('--- Control flow:');
var moneyInPocket = 20;

if (moneyInPocket > 10) {
  console.log('Another drink please!');
} else if (moneyInPocket > 5) {
  console.log('Make mine a half then');
} else {
  console.log('Time to go home');
}

var countryOfOrigin = 'Kenya';
var greeting = '';

switch(countryOfOrigin) {
  case 'France':
    greeting = 'Bonjour';
    break;
  case 'Spain':
    greeting = '¡Hola!';
    break;
  case 'Indonesia':
    greeting = 'Selamat sore';
    break;
  case 'Kenya':
    greeting = 'Jambo!';
    break;
  default:
    greeting = 'Well hello there';
    break;
}
console.log(greeting);

var dayOfWeek = 'Thursday';
// logical AND
if (dayOfWeek.toUpperCase() === 'THURSDAY' || dayOfWeek.toUpperCase() === 'FRIDAY') {
  console.log('Pub thisarvo!');
} else {
  console.log('Bummer :-(');
}
