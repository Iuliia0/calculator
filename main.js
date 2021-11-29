let title = 'First project';
let screens = 'Простые, Сложные, Интерактивные';
let screenPrice = 10000;
let rollback = 55;
let fullPrice = 150000;
let adaptive = true;

let rateOfDollar = 74.60;
let rateOfHryvia = 0.36;
let rateOfYuan = 0.36;

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

title = prompt('Как называется Ваш проект?')
console.log('Проект называется: ' + title)

screens = prompt('Какие типы экранов нужно разработать?')
console.log('Нужны экраны: ' + screens)

screenPrice  = +prompt('Сколько будет стоить данная работа?')
console.log('Данная работа будет стоить: ' + screenPrice)

adaptive = confirm('Нужен ли адаптив на сайте?')
console.log(adaptive)

// альтернативный вариант
// adaptive = ('Нужен ли адаптив на сайте?') === 'Да' || 'да' ? true : false
// console.log(adaptive)

let service1 = prompt('Какой дополнительный тип услуги нужен?')
console.log('Нужно: ' + service1)

let servicePrice1 = +prompt('Сколько это будет стоить?')
console.log(service1 + ' будет стоить: ' + servicePrice1)

let service2 = prompt('Какой дополнительный тип услуги нужен?')
console.log('Нужно: ' + service2)

let servicePrice2 = +prompt('Сколько это будет стоить?')
console.log(service2 + ' будет стоить: ' + servicePrice2)

fullPrice = screenPrice + servicePrice1 + servicePrice2;
console.log('Итоговая стоимость: ' + fullPrice)

let servicePercentPrice = Math.ceil(fullPrice - (fullPrice * (rollback/100)))
console.log('Итоговая стоимость после отката посреднику: ' + servicePercentPrice)


if (fullPrice  >= 30000) {
  console.log('Даем скидку в 10%')
} else if (fullPrice  >= 15000 && fullPrice  < 30000) {
  console.log('Даем скидку в 5%')
} else if (fullPrice < 15000 && fullPrice >= 0) {
  console.log('Скидка не предусмотрена')
} else if (fullPrice < 0) {
  console.log('Что-то пошло не так')
}