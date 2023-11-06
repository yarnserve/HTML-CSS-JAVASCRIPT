// 1. 함수 선언 과 호출
// function myFunc() {
//     console.log('안녕, 자바스크립트~~')
// }

// myFunc()

// const sayHello = function () {
//     console.log('Hello~~~')
// }

// sayHello()

// 2. 매개변수 parameter
// function printMessage (msg) {
//     console.log(msg)
// }

// printMessage('하하하')
// printMessage('호호호')

// function plus(a, b) {
//     console.log( a + b)
// }

// plus(10, 20)

// 3. 기본 파리미터 ( es6 )
// function showInfo(title, name = '스티브잡스') {
//     console.log(`${title} by ${name}`)
// }

// showInfo('게르니카', '피카소')
// showInfo('풍경')

// 4. Rest 파리미터 / Spread연산자( es6 ) - ...
// function printAll(...items) {
//     // for(let i = 0; i < items.length; i++) {
//     //     console.log(items[i])
//     // }  
    
//     for ( let item of items) {
//         console.log(item)
//     }
// }

// printAll('봄', '여름', '가을', '겨울', '안녕', '아침', '밤')

// 5. scope

// let movie = '하하하' // 전역변수 global

// function printMovie() {
//     let myMovie = '생활의 발견' // 지역변수 local

//     console.log(myMovie)
//     console.log(movie)
// }

// printMovie()
// console.log(myMovie)

// 6. return
// function plus(a, b) {
//     return a + b
// }

// const result = plus(20, 30)
// console.log(result)

// 7. 화살표 함수

// function add ( a, b) {
//     return a + b
// }

// const add = function(a, b) {
//     return a + b
// }

const add = (a, b) => a + b

const sum = add(5, 8)
console.log(sum)