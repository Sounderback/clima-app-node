const axios = require('axios');


const getLugarLatLng = async(direccion) => {

    let encodeUrl = encodeURI(direccion);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeUrl }&key=AIzaSyDwDnO3b_kdEFVxlRdqNeGKYD0jR2VIqUI`)


    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error('No se encontro coincidencia');
    }

    let location = resp.data.results[0];
    let address = location.formatted_address;
    let coor = location.geometry.location;
    console.log(`Direccion: ${address}`);
    console.log(`Latitud: ${coor.lat} Longitud: ${coor.lng}`);
    //console.log(JSON.stringify(resp.data, undefined, 2));


    return {
        direccion: location.formatted_address,
        lat: coor.lat,
        lng: coor.lng
    }
}

module.exports = {
    getLugarLatLng
}