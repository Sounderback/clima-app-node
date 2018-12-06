const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=6268ae9bfa584a095f65e3ebf273c609`)
    if (resp.cod === '400') return 'Error al obtener temperatura';
    else
        return resp.data.main.temp;


}

module.exports = {
    getClima
}