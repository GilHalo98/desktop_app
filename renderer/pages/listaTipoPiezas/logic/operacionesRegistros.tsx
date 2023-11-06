import { toggleModalRegistro } from "./toggleModals";

// Funcion de registro.
function registrarDato(
    refresh: boolean,
    descripcionDeTipoPieza: string,
    registrarLinea: Function,
    setRefresh: Function,
    toggleModalRegistro: Function
) {
    registrarLinea(descripcionDeTipoPieza);
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
    descripcionDeTipoPieza: string,
    modificarRegistro: Function,
    setRefresh: Function,
    toggleModalRegistro: Function
) {
    modificarRegistro(
        idRegistro,
        descripcionDeTipoPieza
    );
    toggleModalRegistro();
    setRefresh(!refresh);
};

export {
    registrarDato,
    eliminarDato,
    modificarDato
};