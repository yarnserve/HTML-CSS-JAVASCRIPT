// Array 배열

// 1. 배열 만들기
{
    // const arr1 = new Array()
    // arr1[0] = 10
    // arr1[1] = 'hello'
    // console.log(arr1)
    
    // const arr2 = [1, 3, 5, 7, 9,'안녕']
    // console.log(arr2)

    // const arr3 = ['what', 'are', 'u', 'doing', true, 100]

    // const arr4 = [
    //     { model: 'apple', price: 1000},
    //     { model: 'galaxy', price: 2000}
    // ]

    // console.log(arr4)
    // console.log(arr4[0].model)
    // console.log(arr4[3])
}

// 2. 배열 출력
{
    // const books = ['html', 'css', 'javascript']
    // console.log(books)
    // console.log(books.length)
    // console.log(books[0])
    // console.log(books[books.length - 1])

    // // for문
    // for(let i = 0; i < books.length; i++) {
    //     console.log(books[i])
    // }  

    // // for of
    // for(let item of books) {
    //     console.log(item)
    // }

    // // for in
    // for(let key in books) {
    //     console.log(key)
    //     console.log(books[key])
    // }

    // // forEach
    // books.forEach( item => {
    //     console.log('📗' + item)
    // })

    // // map : 새로운 배열을 리턴 
    // const newBooks = books.map( item => `${item} 🎈`)
    
    // console.log(books)
    // console.log(newBooks)
}

// 3. 배열 메서드
{
    // const books = ['html', 'css', 'javascript', 'jquery', 'react']

    // // 배열을 문자열로 만들기
    // console.log(books.join('/'))
    
    // // 배열을 반대로 출력
    // console.log(books.reverse())

    // // 알파벳 정렬
    // console.log(books.sort())

    // // 뒤에 추가
    // books.push('php')
    // console.log(books)

    // // 앞에 추가
    // books.unshift('jsp')
    // console.log(books)

    // // 뒤에 삭제
    // books.pop()
    // console.log(books)

    // // 앞에 삭제
    // books.shift()
    // console.log(books)

    // // splice : 지정한 위치에서 삭제하고 추가
    // books.splice(2, 1, '하하하', '호호호')
    // console.log(books)

    // // concat : 두개의 배열을 합치기
    // const books2 = ['git', 'nodejs']
    // const newBooks = books.concat(books2)
    // console.log(newBooks)

    // // slice : 원하는 구간만큼 잘라서 새로운 배열을 리턴
    // const anotherBooks = newBooks.slice(2, 5)
    // console.log(anotherBooks)

    // // 검색
    // console.log(books)
    // console.log(books.indexOf('jquery'))
    // console.log(books.includes('react'))
    // console.log(books.includes('github'))
}

// 4. 활용예

const sojus = [
    {name: '대선', price: 1200, sale: true, score: 86},       
    {name: '좋은데이', price: 1100, sale: false, score: 92},       
    {name: '진로', price: 1150, sale: true, score: 80},       
    {name: '금복주', price: 960, sale: false, score: 60},       
    {name: '참이슬', price: 1250, sale: true, score: 46},       
]

// 점수가 80점인 소주 찾기 // ~의 이름은?
{
    const result = sojus.find(item => item.score === 80)
    console.log(result)
    console.log(result.name)
}

// 현재 판매중인 소주만 찾아서 새로운 배열로 만들기
{
    const result = sojus.filter(item => item.sale)
    console.log(result)
}

// 점수만 있는 새로운 배열 만들기
{
    const result = sojus.map(item => item.score)
    console.log(result)
}

// 점수가 50보다 작은 소주가 있는지 없는지 확인
{
    const result = sojus.some(item => item.score < 50)
    console.log(result)
}

{
    const result = sojus.find(item => item.score < 50)
    console.log(result)
}

// 소주들의 평균 가격을 계산하기
{
    const result = sojus.reduce((prev, current) => {
        return prev + current.price
    }, 0)

    console.log(result / sojus.length)
}

// 점수가 낮은 순으로, 문자열로 정렬하기
{
    const result = sojus
        .map(item => item.score)
        .sort((a, b) => a - b)
        .join()
    
    console.log(result)
}



