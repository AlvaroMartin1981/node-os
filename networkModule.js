/*import os from 'node:os';

function netInfo() {
  const interfaces = os.networkInterfaces();
  const results = [];
  for (const [nombre, detalles] of Object.entries(interfaces)) {
    const detallesInterfaz = [];

    detalles.forEach(detalle => {
      detallesInterfaz.push({
        Familia: detalle.family,
        Direccion: detalle.address,
        Interno: detalle.internal,
      });
    });
    results.push({ Interfaz: nombre, Detalles: detallesInterfaz });
  }
  return results;
}

export { netInfo };*/
const os = require('node:os');

function getInfoNetwork() {
  const networkInterfaces = os.networkInterfaces();
  const redes = {};

  Object.keys(networkInterfaces).forEach(dato => {
    redes[dato] = networkInterfaces[dato].map(interface => ({
      Familia: interface.family,
      Direccion: interface.address,
      Interno: interface.internal
    }));
  });

  return redes;
}

console.log(getInfoNetwork());
