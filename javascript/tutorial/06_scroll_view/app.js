const section = document.querySelector('section')

window.addEventListener('scroll', function(){
    let value = window.scrollY
    section.style.clipPath = `circle(${value}px)`
})

