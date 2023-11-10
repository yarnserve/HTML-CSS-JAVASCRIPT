const weather = document.querySelector('.weather')
const API = '26a8f813a56d73684d04cdff5a1f7720'

function getWeaher(lat, lon) {
    console.log(lat, lon);

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API}&units=metric`

    fetch(url)
    .then(function(response) {
        return response.json()
    }) 
    .then(function(json) {        
        const city = json.name
        const temp = json.main.temp

        weather.innerText = `${temp}°C ${city} `
    })   
}

function geoSucces(position) {
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude    

    getWeaher(latitude, longitude)
}

function geoError() {
    console.log('위치 정보를 허용하지 않았습니다.')
}

function askCoords() {
    navigator.geolocation.getCurrentPosition(geoSucces, geoError)
}

function init() {
    askCoords()
}

init()