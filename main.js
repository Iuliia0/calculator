// 'use strict'

let rollback = 10;

let title
let screens
let screenPrice
let adaptive
let allServicePrices 
let fullPrice 
let servicePercentPrice
let service1
let service2


const isNumber = function(num) {
  return !isNaN(parseFloat(num)) && isFinite(num)
}


const makeNumber = function (i) {
  if (typeof i === 'string') {
    i = +i
  } else {
    i = i
  }
  return i
}

const asking = function () {
  title = prompt('Как называется Ваш проект?', 'Калькулятор вёрстки')
  screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные').split(' ')
    // screenPrice = '1000'

  do {
    screenPrice = prompt('Сколько будет стоить данная работа?', 10000)
  }  while (!isNumber(screenPrice))

  // while (!isNumber(screenPrice)) (
  //   screenPrice =  prompt('Сколько будет стоить данная работа?')
  // )
  adaptive = confirm('Нужен ли адаптив на сайте?')

  if (typeof screenPrice === 'string') {
    screenPrice = +screenPrice
  } else {
    screenPrice = +screenPrice
  }
}

const getAllServicePrices = function () {
  let sumStr = 0
  let sumNum = 0

  for (let i = 0; i < 2; i++) {
    
    if (i === 0) {
      service1 = prompt('Какой дополнительный тип услуги нужен?', 'Форма')
    } else if (i === 1) {
      service2 =  prompt('Какой дополнительный тип услуги нужен?', 'Карта')
    } 
      sumStr = prompt('Сколько это будет стоить', 4000)
      while (!isNumber(sumStr)) {
        sumStr = prompt('Сколько это будет стоить', 4000)
      }
        sumNum += makeNumber(sumStr)

  }

  return makeNumber(sumNum)
}

const showTypeOf = function (variable) {
  console.log(variable, typeof variable)
}

function getFullPrice () {
  return allServicePrices + screenPrice
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

const getTitlel = function () {
  let arrTitle = title.split(' ').filter(arr => arr !== '');
  let newTitle = ''
  for (let i = 0; i <= arrTitle.length-1; i++) {
    newTitle += arrTitle[i] + ' '
  }
  newTitle = newTitle[0].toUpperCase() + newTitle.slice(1)
  return newTitle
}

// вариант Александра
// const getTitel = function () {
//   return title.trim()[0].toUpperCase() + title.trim().substr(1).toLowerCase()
// }

const getServicePercentPrices = function () {
  return  Math.ceil(fullPrice - (fullPrice * (rollback/100)))
}

asking()

allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title - getTitlel();

showTypeOf(title)
showTypeOf(fullPrice)
showTypeOf(adaptive)
showTypeOf(screens)
showTypeOf(screenPrice)
showTypeOf(allServicePrices)
showTypeOf(servicePercentPrice)
showTypeOf(service1)
showTypeOf(service2)

console.log('allServicePrices', allServicePrices)
console.log('Стоимость за вычетом процента отката посреднику ' + servicePercentPrice); 
console.log(getRollbackMessage(fullPrice))
console.log(screens);