'use strict'

let title = prompt('Как называется Ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?');
let screenPrice = +prompt('Сколько будет стоить данная работа?');
let adaptive = confirm('Нужен ли адаптив на сайте?');
let rollback = 10;
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = Math.ceil(fullPrice - (fullPrice * (rollback/100)))

let rateOfDollar = 74.60;
let rateOfHryvia = 0.36;
let rateOfYuan = 0.36;

if (fullPrice  >= 30000) {
  console.log('Даем скидку в 10%')
} else if (fullPrice  >= 15000 && fullPrice  < 30000) {
  console.log('Даем скидку в 5%')
} else if (fullPrice < 15000 && fullPrice >= 0) {
  console.log('Скидка не предусмотрена')
} else if (fullPrice < 0) {
  console.log('Что-то пошло не так')
}

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log('Стоимость верстки экранов ' + screenPrice + ' рублей.');
console.log('Стоимость верстки экранов ' + Math.ceil(screenPrice / rateOfDollar) + ' долларов.');
console.log('Стоимость верстки экранов ' + Math.ceil(screenPrice /  rateOfHryvia) + ' гривен.');
console.log('Стоимость верстки экранов ' + Math.ceil(screenPrice / rateOfYuan) + ' юани.');

console.log('Стоимость разработки сайта' + fullPrice + 'рублей.');
console.log('Стоимость разработки сайта' + Math.ceil(fullPrice / rateOfDollar) + 'долларов.');
console.log('Стоимость разработки сайта' + Math.ceil(fullPrice /  rateOfHryvia) + 'гривен.');
console.log('Стоимость разработки сайта' + Math.ceil(fullPrice / rateOfYuan) + 'юани.');

console.log(screens.toLowerCase().split())
console.log(fullPrice * (rollback/100))

console.log('Итоговая стоимость после отката посреднику: ' + servicePercentPrice)