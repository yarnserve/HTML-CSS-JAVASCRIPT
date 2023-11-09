const btn = document.querySelector('.btn')
const ball = document.querySelectorAll('.numbers li')
const list = document.querySelector('.list')

let count = 0

function addList(lotto) {
  const ul = document.createElement('ul')
  ul.className = 'items'
  
  for(let i = 0; i < lotto.length; i++ ) {
    const li = document.createElement('li')
    li.innerText = lotto[i]
    ul.appendChild(li)
  }

  list.prepend(ul)
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
  if(count >= 10) {
    snackbar.createSnackbar('하루 10번만 하세요',{
      timeout: 3000,
      actions: [
        {
          text: '확인',
          style: {
            color: 'tomato'
          },
          callback(button, snackbar) {
            snackbar.destroy()           
          }
        }
      ]
    })
    btn.classList.add('none')
  } else {
    printNumber()
    count++
    console.log(count);
  }

})