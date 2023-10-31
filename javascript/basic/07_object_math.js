// Math Object
{
    // console.log(Math)
    // console.log(Math.PI)   

    // const sum = 9.4
    // const sum2 = '12.12463'

    // console.log(Math.round(sum)) // 소수점 첫째 자리에서 반올림해서 정수 반환
    // console.log(Math.ceil(sum)) // 무조건 올림
    // console.log(Math.floor(sum)) // 무조건 내림
    // console.log(parseInt(sum2)) // 문자를 숫자로 반환
    // console.log(Number(sum2)) // 문자를 숫자로 반환
}

{
    const num = Math.random()
    console.log(num)

    // 0 ~ 9 사이의 정수를 출력
    console.log(Math.floor(Math.random() * 10))

    // 1 ~ 10 사이의 정수를 출력
    console.log(Math.floor(Math.random() * 10) + 1)
    
    const food = ['김밥', '우동', '칼국수', '햄버거']
    const randomNum = Math.floor(Math.random() * food.length)
    
    console.log(food[randomNum])
}