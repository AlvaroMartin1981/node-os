import os from 'node:os';

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

export { netInfo };
