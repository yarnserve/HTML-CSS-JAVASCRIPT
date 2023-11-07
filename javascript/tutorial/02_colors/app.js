const bg = ['orange', 'lightblue', 'red', 'aqua', 'yellow', 'lightgreen']
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,'a', 'b', 'c', 'd','e','f']

const bgBtn = document.querySelector('.bg_btn')
const hexBtn = document.querySelector('.hex_btn')
const colorName = document.querySelector('.color_name')

bgBtn.addEventListener('click', function() {
    const randomBgNum = Math.floor(Math.random() * bg.length)
    document.body.style.backgroundColor = bg[randomBgNum]
    colorName.textContent = bg[randomBgNum]
})

hexBtn.addEventListener('click', function() {
    let hexColor = '#'
    for(let i = 0; i < 6; i++) {
        const randomHexNum = Math.floor(Math.random() * hex.length)
        hexColor += hex[randomHexNum]
    }

    document.body.style.backgroundColor = hexColor
    colorName.textContent = hexColor
})