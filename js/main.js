'use strict'
const titles = document.getElementsByTagName('h1')
const title = titles[0]
const buttonStart = document.getElementsByClassName('handler_btn')[0]
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
  rollback: 0,
  title: '',
  screens: [],
  screenPrice: 0,
  adaptive: true,
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  fullPrice : 0,
  servicePercentPrice: 0,
  servicesPercent: {},
  servicesNumber: {},
  isError: false,
  count: 0,  
  validation: function() {
    appData.isError = false
    screens = document.querySelectorAll('.screen')
    screens.forEach(function(screen) {
      const select = screen.querySelector('select');
      const input = screen.querySelector('input');
      if (select.value === '' || input.value.trim() === '') {
      appData.isError = true;
      }
    });
    if(!appData.isError) {
      appData.start();
    } else {
      alert('Заполни поля')
    }

  },
  init: function () {
    appData.addTitle()
    screens = document.querySelectorAll('.screen')
    buttonStart.addEventListener('click', appData.validation) 

    buttonPlus.addEventListener('click', appData.addScreenBlock)

    rollbackInput.addEventListener('input', () => {
      rollbackPercent.textContent = rollbackInput.value + '%'
      appData.rollback = rollbackInput.value
      appData.servicePricesPercent = appData.fullPrice - (appData.fullPrice * (appData.rollback/100))
      totalItemRollback.value = appData.servicePricesPercent
    })
  },
  addTitle: function() {
    document.title = title.textContent
  },

  addScreens: function() {
    screens = document.querySelectorAll('.screen')
    screens.forEach((screen, index) => {
      appData.count++
      const select = screen.querySelector('select')
      const input = screen.querySelector('input')
      const selectName = select.options[select.selectedIndex].textContent

      appData.screens.push({
        id: index,
        name: selectName,
        price: +select.value * +input.value
      })
    })
    
  },
  showResult: function() {
    totalItem.value = appData.screenPrice
    totalItemOther.value = appData.servicePricesPercent + appData.servicePricesNumber
    totalItemFullCount.value = appData.fullPrice

  },
  addServices: function () {
    itemsPercent.forEach(function (item) {
      const check = item.querySelector('input[type=checkbox]')
      const label = item.querySelector('label')
      const input = item.querySelector('input[type=text]')

      if (check.checked) {
        appData.servicesPercent[label.textContent] = +input.value
      }
    })

    itemNumber.forEach(function (item) {
      const check = item.querySelector('input[type=checkbox]')
      const label = item.querySelector('label')
      const input = item.querySelector('input[type=text]')

      if (check.checked) {
        appData.servicesNumber[label.textContent] = +input.value
      }
    })
  },
  addScreenBlock: function() {
    const cloneScreen = screens[0].cloneNode(true)
    screens[screens.length-1].after(cloneScreen)
  },
  addPrices: function () {
    for (let screen of appData.screens) {
      appData.screenPrice += +screen.price
    }

    appData.screenPrice  = appData.screens.reduce(function(sum, item) {
    return sum + +item.price
    }, 0)

    for (let key in appData.servicesNumber) {
      appData.servicePricesNumber += appData.servicesNumber[key]
    }    
    
    for (let key in appData.servicesPercent) {
      appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key]/100)
    }
    appData.fullPrice = appData.screenPrice + appData.servicePricesPercent + appData.servicePricesNumber

    appData.servicePricesPercent = appData.fullPrice - (appData.fullPrice * (appData.rollback/100))
    totalItemRollback.value = appData.servicePricesPercent

    totalItemCount.value = appData.count
  },
  showTypeOf: function (variable) {
    console.log(variable, typeof variable)
  },
  logger: function() {
      console.log(appData.fullPrice)
      console.log(appData.servicePercentPrice)
      console.log(appData.screens)
      console.log(appData.services)

      
  },
  start: function() {
    appData.addScreens()
    appData.addServices()
    appData.addPrices(),
    // appData.logger()
    appData.showResult()
  }
}

appData.init()
