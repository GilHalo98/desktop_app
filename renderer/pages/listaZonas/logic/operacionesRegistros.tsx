import { toggleModalRegistro } from "./toggleModals";

// Funcion de registro.
function registrarDato(
    refresh: boolean,
    nombreZona: string,
    descripcionZona: string,
    idLineaVinculada: number,
    registrarZona: Function,
    setRefresh: Function,
    toggleModalRegistro: Function
) {
    registrarZona(
        nombreZona,
        descripcionZona,
        idLineaVinculada
    );
    toggleModalRegistro();
    setRefresh(!refresh);
};

function eliminarDato(
    refresh: boolean,
    idRegistro: number,
    setRefresh: Function,
    removerLinea: Function,
    toggleModalRemoverRegistro: Function
) {
    toggleModalRemoverRegistro();
    removerLinea(idRegistro);
    setRefresh(!refresh);
};

function modificarDato(
    refresh: boolean,
    idRegistro: number,
    nombreLinea: string,
    descripcionLinea: string,
    modificarRegistro: Function,
    setRefresh: Function,
    toggleModalRegistro: Function
) {
    modificarRegistro(
        idRegistro,
        nombreLinea,
        descripcionLinea
    );
    toggleModalRegistro();
    setRefresh(!refresh);
};

export {
    registrarDato,
    eliminarDato,
    modificarDato
};