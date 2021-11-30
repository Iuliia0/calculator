'use strict'

let title = getTitlel(prompt('Как называется Ваш проект?'));
let screens = prompt('Какие типы экранов нужно разработать?').split(' ');
let screenPrice =  +prompt('Сколько будет стоить данная работа?');
let adaptive = confirm('Нужен ли адаптив на сайте?');
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 =  +prompt('Сколько это будет стоить?');

let rollback = 10;

let allServicePrices, fullPrice, servicePercentPrice

const showTypeOf = function (variable) {
  console.log(variable, typeof variable)
}

const getAllServicePrices = function (price1, price2) {
  return price1 + price2
}

function getFullPrice (allPrice, price) {
  return allPrice + price
}

const getRollbackMessage = function (price) {
    if (price  >= 30000) {
    return 'Даем скидку в 10%'
  } else if (price  >= 15000 && price  < 30000) {
    return 'Даем скидку в 5%'
  } else if (price < 15000 && price >= 0) {
    return 'Скидка не предусмотрена'
  } else if (price < 0) {
    return 'Что-то пошло не так'
  }
}

  function getTitlel (str) {
  let arrTitle = str.split(' ').filter(arr => arr !== '');
  let newTitle = ''
  for (let i = 0; i <= arrTitle.length-1; i++) {
    newTitle += arrTitle[i] + ' '
  }
  newTitle = newTitle[0].toUpperCase() + newTitle.slice(1)
  return newTitle
}

const getServicePercentPrices = function (allPrice, percent) {
  return Math.ceil(allPrice - (allPrice * (percent/100)));
}

allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);
fullPrice = getFullPrice(allServicePrices, screenPrice);
servicePercentPrice = getServicePercentPrices(fullPrice, rollback)

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);


console.log('Стоимость за вычетом процента отката посреднику ' + servicePercentPrice); 
console.log(getRollbackMessage(fullPrice))
console.log(screens);