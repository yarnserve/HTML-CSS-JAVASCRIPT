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
    const books = ['html', 'css', 'javascript']
    console.log(books)
    console.log(books.length)
    console.log(books[0])
    console.log(books[books.length - 1])

    // for문
    for(let i = 0; i < books.length; i++) {
        console.log(books[i])
    }  

    // for of
    for(let item of books) {
        console.log(item)
    }

    // for in
    for(let key in books) {
        console.log(key)
        console.log(books[key])
    }

    // forEach
    books.forEach( item => {
        console.log('📗' + item)
    })

    // map : 새로운 배열을 리턴 
    const newBooks = books.map( item => `${item} 🎈`)
    
    console.log(books)
    console.log(newBooks)
}

