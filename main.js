// 'use strict'
const appData = {
  rollback: 10,
  title: '',
  screens: '',
  screenPrice: 0,
  adaptive: true,
  allServicePrices : 0,
  fullPrice : 0,
  servicePercentPrice: 0,
  service1: '',
  service2: '',
  asking: function () {
    appData.title = prompt('Как называется Ваш проект?', 'Калькулятор вёрстки')
    appData.screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные').split(' ')
    do {
      appData.screenPrice = prompt('Сколько будет стоить данная работа?', 10000)
    }  while (!appData.isNumber(appData.screenPrice))
    appData.screenPrice = +appData.screenPrice
    appData.adaptive = confirm('Нужен ли адаптив на сайте?')
  },
  isNumber: function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
  },
  getAllServicePrices: function () {
    let sumStr = 0
    let sumNum = 0

    for (let i = 0; i < 2; i++) {
      if (i === 0) {
        appData.service1 = prompt('Какой дополнительный тип услуги нужен?', 'Форма')
      } else if (i === 1) {
        appData.service2 =  prompt('Какой дополнительный тип услуги нужен?', 'Карта')
      } 
        sumStr = prompt('Сколько это будет стоить', 4000)
        while (!appData.isNumber(sumStr)) {
          sumStr = prompt('Сколько это будет стоить', 4000)
        }
        sumNum += +sumStr
    }

    return sumNum
  },
  showTypeOf: function (variable) {
    console.log(variable, typeof variable)
  },
  getFullPrice: function() {
    return appData.allServicePrices + appData.screenPrice
  },
  getRollbackMessage: function (price) {
      if (price  >= 30000) {
      return 'Даем скидку в 10%'
    } else if (price  >= 15000 && price  < 30000) {
      return 'Даем скидку в 5%'
    } else if (price < 15000 && price >= 0) {
      return 'Скидка не предусмотрена'
    } else if (price < 0) {
      return 'Что-то пошло не так'
    }
  },
  getTitlel: function () {
    let arrTitle = appData.title.split(' ').filter(arr => arr !== '');
    let newTitle = ''
    for (let i = 0; i <= arrTitle.length-1; i++) {
      newTitle += arrTitle[i] + ' '
    }
    newTitle = newTitle[0].toUpperCase() + newTitle.slice(1)
    return newTitle
  },
  getServicePercentPrices: function () {
    return  Math.ceil(appData.fullPrice - (appData.fullPrice * (appData.rollback/100)))
  },
  logger: function() {
      for (let key in appData) {
        console.log('Ключ: ' + key + ' ' + 'Значение: ' + appData[key]) 
      }
  },
  start: function() {
    appData.asking(),
    appData.allServicePrices = appData.getAllServicePrices(),
    appData.fullPrice = appData.getFullPrice(),
    appData.servicePercentPrice = appData.getServicePercentPrices(),
    appData.title = appData.getTitlel(),

    appData.logger()
  }
}

appData.start()

