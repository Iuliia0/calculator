'use strict'
const titles = document.getElementsByTagName('h1')
const title = titles[0]
const buttonStart = document.getElementsByClassName('handler_btn')[0]
const buttonDump = document.getElementsByClassName('handler_btn')[1]

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

const cms = document.querySelector('.cms')
const cmsInput = cms.querySelector('#cms-open')
const cmsSelectBlock = cms.querySelector('.hidden-cms-variants')

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
  cmsCount: 0,    
  start: function() {
    this.addScreens(),
    this.addServices(),
    this.addPrices(),
    this.showResult()
    
  },
  validation: function() {
    this.isError = false
    screens = document.querySelectorAll('.screen')
    screens.forEach((screen) => {
      const select = screen.querySelector('select');
      const input = screen.querySelector('input');
      if (select.value === '' || input.value.trim() === '') {
      this.isError = true;
      }
    });
    if(!this.isError) {
      this.start()
      buttonStart.style.display = 'none'
      buttonDump.style.display = 'flex'
      appData.block()
    } else {
      alert('Заполни поля')
    }
  },
  check() {
    if (cmsInput.checked) {
    cmsSelectBlock.style.display = 'flex'
    }
    const input = cmsSelectBlock.querySelector('.main-controls__input')
    const select = cmsSelectBlock.querySelectorAll('select')
    select.forEach((item) => {
      item.addEventListener('click', () => {
        if (item.value === 'other') {
          input.style.display = 'flex'
        }  else {
          input.style.display = 'none'
        }
      })
    })
  },
  block() {
    screens = document.querySelectorAll('.screen')
    screens.forEach((screen) => {
      screen.querySelector('select').disabled = true;
      screen.querySelector('input').disabled = true;
      })
  },
  reset() {
    const input = cmsSelectBlock.querySelector('.main-controls__input')
    buttonStart.style.display = 'flex'
    buttonDump.style.display = 'none'
    input.style.display = 'none'
    cmsSelectBlock.style.display = 'none'
    document.querySelectorAll('input[type="checkbox"]').forEach((item) => {
      item.checked = false
    })

    screens = document.querySelectorAll('.screen')
    screens.forEach((screen, index) => {
      screen.querySelector('select').disabled = false;
      screen.querySelector('input').disabled = false;
      screen.querySelector('input').value = '';
      screen.querySelector('select')[0].selected = true
      if (index !== 0) {
        screen.remove('screen')
      }
      })

    this.servicePercentPrice = 0
    this.fullPrice = 0
    this.rollback = 0
    this.count = 0
    this.screenPrice = 0
    this.screens.length = 0
    rollbackInput.value = 0
    totalItemRollback.value = 0
    rollbackPercent.textContent = 0 + '%'    

    for (let key in this.servicesNumber) {
      this.servicesNumber[key] = 0
      this.servicePricesNumber = 0
    }

    for (let key in this.servicesPercent) {
      this.servicesPercent[key] = 0
      this.servicePricesPercent = 0
    }
    
    const cmsInput = cmsSelectBlock.querySelector('input')
    cmsInput.disabled = false
    cmsInput.value = ''

    const select = cmsSelectBlock.querySelectorAll('select')
    select.forEach((item) => {
      item[0].selected = true
    })

    const listItems = document.querySelectorAll('.total-input')
    listItems.forEach((item) => {
      item.value = 0
    })
  },
  init: function () {
    this.addTitle()
    screens = document.querySelectorAll('.screen')
    buttonStart.addEventListener('click', () => this.validation()) 
    buttonDump.addEventListener('click', () => this.reset()) 

    buttonPlus.addEventListener('click', this.addScreenBlock)
    
    rollbackInput.addEventListener('input', () => {
      rollbackPercent.textContent = rollbackInput.value + '%'
      this.rollback = rollbackInput.value
      this.servicePricesPercent = this.fullPrice - (this.fullPrice * (this.rollback/100))
      totalItemRollback.value = this.servicePricesPercent
    })

    cmsInput.addEventListener('input', this.check)
      },
  addTitle: function() {
    document.title = title.textContent
  },
  addScreens: function() {
    screens = document.querySelectorAll('.screen')
    screens.forEach((screen, index) => {
      const select = screen.querySelector('select')
      const input = screen.querySelector('input')
      const selectName = select.options[select.selectedIndex].textContent
      this.count += +input.value
        this.screens.push({
        id: index,
        name: selectName,
        price: +select.value * +input.value
      })
    })
    
  },
  showResult: function() {
    totalItem.value = this.screenPrice
    totalItemCount.value = this.count
    totalItemOther.value = this.servicePricesPercent + this.servicePricesNumber + this.cmsCount
    totalItemFullCount.value = this.fullPrice
    totalItemRollback.value = this.servicePercentPrice
  },
  addServices: function () {
    itemsPercent.forEach((item) => {
      const check = item.querySelector('input[type=checkbox]')
      const label = item.querySelector('label')
      const input = item.querySelector('input[type=text]')
      if (check.checked) {
        this.servicesPercent[label.textContent] = +input.value
      }
    })

    itemNumber.forEach((item) => {
      const check = item.querySelector('input[type=checkbox]')
      const label = item.querySelector('label')
      const input = item.querySelector('input[type=text]')

      if (check.checked) {
        this.servicesNumber[label.textContent] = +input.value

      }
    })

  },
  addScreenBlock: function() {
    screens = document.querySelectorAll('.screen')
    const cloneScreen = screens[0].cloneNode(true)

    screens[screens.length-1].after(cloneScreen)
  },
  addPrices: function () {  
    for (let screen of this.screens) {
      this.screenPrice += +screen.price
    }
    this.screenPrice  = this.screens.reduce((sum, item) => {
    return sum + +item.price
    }, 0)

    for (let key in this.servicesNumber) {
      this.servicePricesNumber += this.servicesNumber[key]
    }    
    for (let key in this.servicesPercent) {
      this.servicePricesPercent += this.screenPrice * (this.servicesPercent[key]/100)
    }
    const select = cmsSelectBlock.querySelectorAll('select')
    const input = cmsSelectBlock.querySelector('input')

    select.forEach((item) => {
      if (item.value === '50') {
        this.cmsCount = this.screenPrice * (+item.value /100)

      } else if (item.value === 'other') {
        this.cmsCount = this.screenPrice * (+input.value /100)
      } else  if (input.value === '' || input.value === '0') {
        input.disabled = true
        cmsInput.checked = false
        cmsSelectBlock.style.display = 'none'
      }


    })

    this.fullPrice =  this.screenPrice + this.servicePricesPercent + this.servicePricesNumber + this.cmsCount
    this.servicePercentPrice = Math.floor(this.fullPrice - (this.fullPrice * (this.rollback/100)))

  },
  showTypeOf: function (variable) {
    console.log(variable, typeof variable)
  },
  logger: function() {
      console.log(this.fullPrice)
      console.log(this.servicePercentPrice)
      console.log(this.screens)
      console.log(this.services)
  },
}

appData.init()


