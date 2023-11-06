const onePrice = document.querySelector('#price')
const minus = document.querySelector('.minus')
const plus = document.querySelector('.plus')
const count = document.querySelector('.count')
const totalPrice = document.querySelector('.total span')

const unit_price = 30000
let num = 1
onePrice.textContent = unit_price 
count.textContent = num

plus.addEventListener('click', function(){
    num++
    count.textContent = num
})