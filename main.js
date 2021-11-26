let titel = 'First project';
let screens = 'Простые, Сложные, Интерактивные';
let screenPrice = 10000;
let rollback = 55;
let fullPrice = 150000;
let adaptive = true;

let rateOfDollar = 74.60;
let rateOfHryvia = 0.36;
let rateOfYuan = 0.36;

console.log(typeof titel);
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