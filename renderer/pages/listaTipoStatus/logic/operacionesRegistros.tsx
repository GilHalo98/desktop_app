import { toggleModalRegistro } from "./toggleModals";

// Funcion de registro.
function registrarDato(
    refresh: boolean,
    descripcionDeTipoStatus: string,
    registrarLinea: Function,
    setRefresh: Function,
    toggleModalRegistro: Function
) {
    registrarLinea(descripcionDeTipoStatus);
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
    descripcionDeTipoStatus: string,
    modificarRegistro: Function,
    setRefresh: Function,
    toggleModalRegistro: Function
) {
    modificarRegistro(
        idRegistro,
        descripcionDeTipoStatus
    );
    toggleModalRegistro();
    setRefresh(!refresh);
};

export {
    registrarDato,
    eliminarDato,
    modificarDato
};