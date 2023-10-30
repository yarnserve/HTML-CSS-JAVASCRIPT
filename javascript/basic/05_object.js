// object 객체
// 자바스크립트 객체 기반 언어
// 객체는 속성과 기능을 가진다
// phone의 상태 ( property 속성) - size, color
// phone의 행동( method 기능 ) - ring, take a picture, play music
// 형식 - { 키 : 값} { color: 'white'}

// 객체의 종류
// - 내장객체 : 문자(String), 날짜(Date), 배열(Array), 수학(Math) 등
// - 브라우저 객체 모델(BOM) : window, screen, location, history, navigator
// - 문서 객체 모델(DOM) : html 문서 구조

const user = {
    name: 'Picaso',
    age : 30,
    email : 'picaso@gmail.com',
    works : [
        { id: 1, title: '케르니카', price: 10000, like:50},
        { id: 2, title: '아비뇽의 처녀들', price: 30000, like:80},
        { id: 3, title: '우는 여인', price: 50000, like:200}        
    ],
    // login : function() {
    //     console.log('환영합니다.')
    // },

    login() {
        console.log('환영합니다.')
    },

    logout () {
        console.log('안녕히 가세요')
    },

    goodWorks() {
        console.log('피카소의 대표작')
        this.works.forEach(work => {
            console.log(`${work.id}. ${work.title}, ${work.price}원, 좋아요(${work.like})`)
        })
    }
}

console.log(user.age)

// 수정
user.age = 45
console.log(user.age)

// 타입 확인
console.log(typeof user)

// 메서드
user.login()
user.logout()
user.goodWorks()

