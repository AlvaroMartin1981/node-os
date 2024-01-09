// osModule.mjs
import os from 'node:os';

function systemInfo() {
    const infoSystem = {
        Nombre: os.hostname(),
        Tipo: os.type(),
        Version: os.version(),
        Arquitectura: os.arch(),
        CPUs: os.cpus(),
        MemoriaTotal: (os.totalmem() / 1024 /1024).toFixed(2) + ' MB',
        MemoriaLibre: (os.freemem() / 1024 /1024).toFixed(2) + ' MB',
    };
    return infoSystem;
}

export {systemInfo};


