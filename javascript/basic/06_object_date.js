// Date object
{
    // const today = new Date()
    // console.log(today)

    // const wday = new Date('2023/10/30')
    // console.log(wday)
}

{
    // const now = new Date()
    // const year = now.getFullYear()
    // const month = now.getMonth()
    // const date = now.getDate()

    // const today = year + '년' + ' ' + (month + 1) + '월' + ' ' + date + '일'
    // const today2 = `${year}년 ${month+1}월 ${date}일`

    // console.log(today)
    // console.log(today2)
}

{
    // getTime() : 1970년 1월 1일 부터 현재까지 경과한 시간을 밀리초로 표기
    // 현재 날짜 부터 특정날짜까지 며칠이 남았는지를 구하는 공식
    // 남은일수(밀리초) = 특정날짜(밀리초) - 현재날짜(밀리초)

    // 1초 - 1000
    // 1분 - 1000 * 60
    // 1시간 - 1000 * 60 * 60
    // 1일 - 1000 * 60 * 60 * 24

    // 현재날짜 부터 연말일까지 남은 일수를 구하기
    const today = new Date() 
    const nowYear = today.getFullYear()
    const endDate = new Date(nowYear, 11, 31)
    const remainSec = endDate.getTime() - today.getTime()
    const result = Math.floor(remainSec / (1000 * 60 * 60 * 24))

    console.log(result)
}

  