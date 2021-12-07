'use strict'
const titles = document.getElementsByTagName('h1')
const title = titles[0]
const buttons = document.getElementsByClassName('handler_btn')
const buttonPlus = document.querySelector('.screen-btn')
const itemsPercent = document.querySelectorAll('.other-items.percent')
const itemNumber = document.querySelectorAll('.other-items.number')
const rollbackInput = document.querySelector('.rollback input')
const rollbackPercent = document.querySelector('.rollback span')
const totalItems = document.getElementsByClassName('total-input')

const totalItem = totalItems[0]
const totalItemCount = totalItems[1]
const totalItemOther = totalItems[2]
const totalItemFullCount = totalItems[3]
const totalItemRollback = totalItems[4]

let screens = document.querySelectorAll('.screen')

const appData = {
  rollback: 10,
  title: '',
  screens: [],
  screenPrice: 0,
  adaptive: true,
  allServicePrices : 0,
  fullPrice : 0,
  servicePercentPrice: 0,
  services: {},
  asking: function () {
    do {
      appData.title = prompt('Как называется Ваш проект?', 'Калькулятор вёрстки')
      } while (!appData.isString(appData.title))

    for (let i = 0; i < 2; i++) {
      let price = 0
      let name
      do {
        name = prompt('Какие типы экранов нужно разработать?')
      } while (!appData.isString(name))
      
      do {
        price = prompt('Сколько будет стоить данная работа?', 10000)
      } while (!appData.isNumber(price))

      appData.screens.push({id: i, name: name, price: price})
    }

    for (let i = 0; i < 2; i++) {
      let price = 0
      let name

      if (i === 0) {
        do {
          name = prompt('Какой дополнительный тип услуги нужен?', 'Форма')
        } while (!appData.isString(name))

      } else if (i === 1) {
        do {
          name = prompt('Какой дополнительный тип услуги нужен?', 'Форма')
        } while (!appData.isString(name))
      }     

        price = prompt('Сколько это будет стоить', 4000)
        while (!appData.isNumber(price)) {
          price = prompt('Сколько это будет стоить', 4000)
        }        
        
        if (name in appData.services === true) {
          appData.services[name + '_'] = +price
        } else {
          appData.services[name] = +price
        }
        
    }
    appData.adaptive = confirm('Нужен ли адаптив на сайте?')
  },
  addPrices: function () {
    for (let screen of appData.screens) {
      appData.screenPrice += +screen.price
    }

    appData.screenPrice  = appData.screens.reduce(function(sum, item) {
    return sum + +item.price
    }, 0)

    for (let key in appData.services) {
      appData.allServicePrices += appData.services[key]
    }
  },
  isNumber: function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
  },
  isString: function(num) {
    return isNaN(parseFloat(num)) && !isFinite(num)
  },
  showTypeOf: function (variable) {
    console.log(variable, typeof variable)
  },
  getFullPrice: function() {
    appData.fullPrice = appData.allServicePrices + appData.screenPrice
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
    appData.title = newTitle
  },
  getServicePercentPrices: function () {
    appData.servicePercentPrice = Math.ceil(appData.fullPrice - (appData.fullPrice * (appData.rollback/100)))
  },
  logger: function() {
      console.log(appData.fullPrice)
      console.log(appData.servicePercentPrice)
      console.log(appData.screens)
      console.log(appData.services)

      
  },
  start: function() {
    appData.asking(),
    appData.addPrices(),
    appData.getFullPrice(),
    appData.getServicePercentPrices(),
    appData.getTitlel(),

    appData.logger()
  }
}

appData.start()


console.log(titles)
console.log(title)

console.log(buttons)
console.log(buttonPlus)
console.log(itemsPercent)
console.log(itemNumber)

console.log(rollbackInput)
console.log(rollbackPercent)

console.log(totalItems)
console.log(totalItem)
console.log(totalItemCount)
console.log(totalItemOther)
console.log(totalItemFullCount)
console.log(totalItemRollback)

console.log(screens)
