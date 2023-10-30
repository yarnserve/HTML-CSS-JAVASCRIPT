// Date object
{
    const today = new Date()
    console.log(today)

    const wday = new Date('2023/10/30')
    console.log(wday)
}

{
    const now = new Date()
    const year = now.getFullYear()
    const month = now.getMonth()
    const date = now.getDate()

    const today = year + '년' + ' ' + (month + 1) + '월' + ' ' + date + '일'
    const today2 = `${year}년 ${month+1}월 ${date}일`

    console.log(today)
    console.log(today2)
}