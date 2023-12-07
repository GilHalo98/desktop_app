// Importamos los request.
import {
    PruebaCarga
} from "../request/pruebas";

function PruebaDeCarga (
    setEnCarga: Function,
    cambioPagina: Function
) {
    // Marcamos que los datos estan en carga.
    setEnCarga(true);

    // Realizamos el request.
    PruebaCarga({}).then((respuesta) => {
        // Guardamos los registros en la Permiso.

    }).catch((error) => {
        // Ocurrio un errr al realizar el request.
        console.log(error);

    }).finally(() => {
        // Marcamos que la carga de datos termino.
        cambioPagina();
        setEnCarga(false);
    });
};

export {
    PruebaDeCarga
};