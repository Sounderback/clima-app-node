const argv = require('yargs')
    .option({
        direccion: {
            alias: 'd',
            desc: 'Direccion de la ciudad para obtener el clima',
            demand: true
        }
    }).help()
    .argv;
//https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyDwDnO3b_kdEFVxlRdqNeGKYD0jR2VIqUI
//AIzaSyDwDnO3b_kdEFVxlRdqNeGKYD0jR2VIqUI


module.exports = {
    argv
}