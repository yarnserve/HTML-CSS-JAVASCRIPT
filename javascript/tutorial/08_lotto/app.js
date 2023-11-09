const btn = document.querySelector('.btn')
const ball = document.querySelectorAll('.numbers li')
const list = document.querySelector('.list')

function addList(lotto) {
  console.log(lotto)

  const ul = document.createElement('ul')
  ul.className = 'items'
  
  for(let i = 0; i < lotto.length; i++ ) {
    const li = document.createElement('li')
    li.innerText = lotto[i]
    ul.appendChild(li)
  }

  list.append(ul)
}

function printNumber() {
  const lotto = []

  while(lotto.length < 6) {
    const num = Math.floor(Math.random() * 45) + 1;
    if(!lotto.includes(num)) {
      lotto.push(num)
    }
  }

  ball.forEach((item, i) => item.innerText = lotto[i])
  addList(lotto)
}

btn.addEventListener('click', function(){
  printNumber()
})