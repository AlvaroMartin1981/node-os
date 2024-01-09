import {systemInfo} from './osModule.mjs';
import {netInfo} from './networkModule.mjs';


const infoNetwork = netInfo();
infoNetwork.forEach(interfaz => {
  console.log(`Interfaz ${interfaz.Interfaz}:`);
  interfaz.Detalles.forEach(({ Familia, Direccion, Interno }) => {
    console.log(`  Familia: ${Familia}`);
    console.log(`  Dirección: ${Direccion}`);
    console.log(`  Interno: ${Interno}`);
  });
  console.log('\n');
});




const systemInformation = systemInfo();
console.log(systemInformation);

const networkInformation = netInfo();
console.log(networkInformation);
