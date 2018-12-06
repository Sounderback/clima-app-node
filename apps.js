const { argv } = require('./config/yargs');
const colors = require('colors');
const lugar = require('./lugar/lugar');
const clima = require('./lugar/clima');

let location;
let comando = argv._[0];

let getInfo = async(direccion) => {
    try {
        let coors = await lugar.getLugarLatLng(direccion);

        let temp = await clima.getClima(coors.lat, coors.lng);

        return `El clima en ${coors.direccion} es de ${temp}°C`;
    } catch (error) {
        return `No se pudo determinar el clima en ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(mensaje => {
        console.log(mensaje);
    }).catch(e => { console.log('Error', e) });

// location = lugar.getLugarLatLng(argv.direccion)
//     .then(resp => {
//         console.log(resp);
//         let temp = clima.getClima(resp.lat, resp.lng)
//             .then(resp => { console.log(resp) })
//             .catch(e => { console.log('Error', e) });
//     })
//     .catch(e => console.log('ERROR', e));



//console.log(argv);